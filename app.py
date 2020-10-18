import os
from flask import Flask, render_template, jsonify, request

app = Flask(__name__, static_folder='build/', static_url_path='/')
app.debug = 'DEBUG' in os.environ


@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/dashboard')
def dashboard():
    return app.send_static_file('index.html')


# @app.route('/<path:path>')
# def static_file(path):
#     return app.send_static_file(path)
# routing
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#   return render_template("index.html")
