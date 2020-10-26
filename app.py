import os
from flask import Flask, render_template, jsonify, request
from firebase import Firebase
import requests
import json
from twitter import *
import twitterapikeys

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()
# external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
# dash_app = dash.Dash(__name__, external_stylesheets=external_stylesheets)
app = Flask(__name__, static_folder='build/', static_url_path='/')
config = {
  "apiKey": "AIzaSyBT5w99MAZ9DNHpAE5QrvJGIzIDrTE1Uv0",
  "authDomain": "twitter-mistake.firebaseapp.com",
  "databaseURL": "https://twitter-mistake.firebaseio.com",
  "storageBucket": "twitter-mistake.appspot.com"
}
firebase = Firebase(config)
# server = dash_app.server
# app.debug = 'DEBUG' in os.environ

@app.route('/apis/sign-up', methods=['POST'])
def store_user():
    email="email"
    password="password"
    auth = firebase.auth()    
    auth.create_user_with_email_and_password(request.json['email'], request.json['password'])
    data = {
        'email': request.json['email']
    }   
    return jsonify(data), 200

@app.route('/apis/login', methods=['POST'])
def login():
    # Get a reference to the auth service
    auth = firebase.auth()

    # Log the user in
    user = auth.sign_in_with_email_and_password(request.json['email'], request.json['password'])
    user = auth.refresh(user['refreshToken'])
    # Get a reference to the database service
    db = firebase.database()

    # data to save
    data = {
        'email': request.json['email']
    }

    # Pass the user's idToken to the push method
    results = db.child("users").push(data, user['idToken'])
    return jsonify(data), 200

@app.route('/apis/get-tweets', methods=['POST'])
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
            tweet = i["text"]
            for w in inapp:
                word = w.rstrip('\n')
                tws = " {} ".format(tweet)
                if " {} ".format(word) in tws.lower():
                    tid = i["id"]
                    tweets.append(tweet)
                    tweet_ids.append(tid)
                    break
            for w in words:
                word = w.rstrip('\n')
                tws = " {} ".format(tweet)
                if " {} ".format(word) in tws.lower():
                    tid = i["id"]
                    tweets.append(tweet)
                    tweet_ids.append(tid)
                    break

    db = firebase.database()
    bno = db.child("batch_matching").order_by_child("batch_id").limit_to_first(1).get()

    user = request.json['email']
    batch = bno + 1 #get highest number batch from list, add one to it 
    db.child("batch_matching").push({
        "batch_id" : batch,
        "user" : user
        })
    data = {"batch_id" : batch}
    for i in range(len(tweets)):
        data["id"] = tids[i]
        data["tweet"] = tweets[i]
        db.child("tweets").push(data)

    return 200



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
