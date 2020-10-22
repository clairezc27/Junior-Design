import os
import jwt
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from firebase import Firebase
import requests
import json
from twitter import *
import config

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()

app = Flask(__name__, static_folder='build/', static_url_path='/')
config = {
  "apiKey": "AIzaSyBT5w99MAZ9DNHpAE5QrvJGIzIDrTE1Uv0",
  "authDomain": "twitter-mistake.firebaseapp.com",
  "databaseURL": "https://twitter-mistake.firebaseio.com",
  "storageBucket": "twitter-mistake.appspot.com"
}
CORS(app)
bcrypt = Bcrypt()
firebase = Firebase(config)
# app.debug = 'DEBUG' in os.environ

@app.route('/apis/sign-up', methods=['POST'])
def store_user():
    email="email"
    password="password"
    # email = request.json['email']
    # username = request.json['username']
    auth = firebase.auth()
    auth.create_user_with_email_and_password(email, password)
    
    return 200

@app.route('/apis/twitter', methods=['POST'])
def store_data(tweets, tids):

    auth = firebase.auth()
    user = 1 #get user somehow
    batch = 1 #get highest number batch from list, add one to it 
    for i in range(len(tweets)):
        auth.add_flagged_tweet(tids[i], tweets[i], user, batch)

    return 200

def get_data(handle):
    bearer_token = config.bearerToken
    url = "https://api.twitter.com/2/tweets/search/recent?query=from:{}".format(
        handle
    )
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    response = requests.request("GET", url, headers=headers)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    json_response =  response.json()

    tweets = []
    tweetIDs = []
    if json_response['meta']['result_count'] > 0:
        data = json_response["data"]
        for i in data:    
            tweet = i["text"]
            for word in inapp:
                if word.rstrip('\n') in tweet.lower():
                    tid = i["id"]
                    tweets.append(tweet)
                    tweetIDs.append(tid)
                    break
    return tweets, tweetIDs

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
def login():
    return app.send_static_file('index.html')
@app.route('/signup')
def signup():
    return app.send_static_file('index.html')


# @app.route('/<path:path>')
# def static_file(path):
#     return app.send_static_file(path)
# routing
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
