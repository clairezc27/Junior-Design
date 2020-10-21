import os
from flask import Flask, render_template, jsonify, request
# from google.appengine.api import users
# from google.auth import app_engine
# credentials = app_engine.Credentials()

app = Flask(__name__, static_folder='build/', static_url_path='/')
app.debug = 'DEBUG' in os.environ


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


# @app.route('/<path:path>')
# def static_file(path):
#     return app.send_static_file(path)
# routing
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#   return render_template("index.html")
if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=5000, debug=True)
