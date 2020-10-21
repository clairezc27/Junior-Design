import os
import jwt
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from flask_bcrypt import Bcrypt
# from google.appengine.api import users
# from google.auth import app_engine
# credentials = app_engine.Credentials()

app = Flask(__name__, static_folder='build/', static_url_path='/')
CORS(app)
bcrypt = Bcrypt()
# app.debug = 'DEBUG' in os.environ


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
