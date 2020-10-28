import os
from flask import Flask, render_template, jsonify, request
from firebase import Firebase
import requests
import json
from twitter import *
import twitterapikeys
from datetime import date

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()
app = Flask(__name__, static_folder='build/', static_url_path='/')
config = {
  "apiKey": "AIzaSyBT5w99MAZ9DNHpAE5QrvJGIzIDrTE1Uv0",
  "authDomain": "twitter-mistake.firebaseapp.com",
  "databaseURL": "https://twitter-mistake.firebaseio.com",
  "storageBucket": "twitter-mistake.appspot.com"
}
firebase = Firebase(config)

@app.route('/apis/sign-up', methods=['POST'])
def store_user():
    auth = firebase.auth()    
    auth.create_user_with_email_and_password(request.json['email'], request.json['password'])
    data = {
        'email': request.json['email']
        }   
    return jsonify(data), 200

@app.route('/apis/login', methods=['POST'])
def login():
    auth = firebase.auth()
    user = auth.sign_in_with_email_and_password(request.json['email'], request.json['password'])
    user = auth.refresh(user['refreshToken'])
    db = firebase.database()
    data = {
        'email': request.json['email']
    }
    results = db.child("users").push(data, user['idToken'])
    return jsonify(data), 200

@app.route('/apis/search-tweets', methods=['POST'])
def store_data():
    # gets flagged tweets from api, stores them in db
    handle = request.json['handle']
    words = request.json['words']
    bearer_token = twitterapikeys.bearerToken
    url = "https://api.twitter.com/2/tweets/search/recent?query=from:{}".format(
        handle
    )
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    response = requests.request("GET", url, headers=headers)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    json_response =  response.json()

    tweets = []
    tweet_ids = []
    if json_response['meta']['result_count'] > 0:
        data = json_response["data"]
        for i in data: # i is each tweet in data
            found = False
            tweet = i["text"]
            for w in inapp:
                word = w.rstrip('\n')
                tws = " {} ".format(tweet)
                if " {} ".format(word) in tws.lower():
                    tid = i["id"]
                    tweets.append(tweet)
                    tweet_ids.append(tid)
                    found = True
                    break
            if found == False:
                for w in words.split(","):
                    print(w)
                    tws = " {} ".format(tweet)
                    if " {} ".format(w) in tws.lower():
                        tid = i["id"]
                        tweets.append(tweet)
                        tweet_ids.append(tid)
                        break

    db = firebase.database()
    user = db.child("users").get()
    # db.child("batch_matching").push({"batch_id": 1, "user": "testuser"}, jsonify(user['idToken']))
    # bm = db.child("batch_matching").get()
    bno = 1 # db.child("batch_matching").order_by_child("batch_id").limit_to_first(1).get()

    user = request.json['email']
    batch = bno + 1 #get highest number batch from list, add one to it 
    today = date.today().strftime("%m/%d/%Y")
    # db.child("batch_matching").push({
    #     "batch_id": batch,
    #     "user": user
    #     "date": today
    #     })
    data = {"batch_id": batch}
    for i in range(len(tweets)):
        data["id"] = tweet_ids[i]
        data["tweet"] = tweets[i]
        print(data)
    #     db.child("tweets").push(data)
    print(tweets)
    print(tweet_ids)
    
    return jsonify(tweets), 200



@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/dashboard')
def dashboard():
    return app.send_static_file('index.html')
@app.route('/new-search')
def new_search():
    return app.send_static_file('index.html')
@app.route('/review')
def review():
    return app.send_static_file('index.html')
@app.route('/login')
def loginpage():
    return app.send_static_file('index.html')
@app.route('/signup')
def signuppage():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
