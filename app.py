import os
from flask import Flask, render_template, jsonify, request
from firebase import Firebase
import requests
import json
from twitter import *
import twitterapikeys
from datetime import date
import firebase_admin
from firebase_admin import credentials
from google.cloud import firestore

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()
app = Flask(__name__, static_folder='build/', static_url_path='/')
config = {
  "apiKey": "AIzaSyBT5w99MAZ9DNHpAE5QrvJGIzIDrTE1Uv0",
  "authDomain": "twitter-mistake.firebaseapp.com",
  "databaseURL": "https://twitter-mistake.firebaseio.com",
  "storageBucket": "twitter-mistake.appspot.com"
}
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'twitter-mistake'
})
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

    db = firestore.Client()
    bno=100
    ref = db.collection(u'batch_mapping')
    query = ref.order_by(
        'batch_id', direction='DESCENDING').limit(1)
    results = query.get()
    for doc in results:
        response = str(doc.to_dict())
        response = response.replace("\'", "\"")
        load = json.loads(response)
        bno = int(load["batch_id"]) + 1

    today = date.today().strftime("%m/%d/%Y")

    # create a new batch to add to database
    new_batch = {
        u"batch_id": bno,
        u"user": str(request.json['email']),
        u"date": today
    }
    db.collection(u'batch_mapping').add(new_batch)
    
    data = {"batch_id": bno}
    for i in range(len(tweets)):
        data["id"] = tweet_ids[i]
        data["tweet"] = tweets[i]
        print(data)
        db.collection(u'tweet').add(data)
    
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
@app.route('/account')
def account():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
