import requests
import json
from twitter import *
import config

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()

def auth():
    return config.bearerToken


def create_url(handle):
    query = handle
    # Tweet fields are adjustable.
    # Options include:
    # attachments, author_id, context_annotations,
    # conversation_id, created_at, entities, geo, id,
    # in_reply_to_user_id, lang, non_public_metrics, organic_metrics,
    # possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets,
    # source, text, and withheld
    url = "https://api.twitter.com/2/tweets/search/recent?query=from:{}".format(
        query
    )
    return url


def create_headers(bearer_token):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    return headers


def connect_to_endpoint(url, headers):
    response = requests.request("GET", url, headers=headers)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()

def printResults(handle):
    bearer_token = auth()
    url = "https://api.twitter.com/2/tweets/search/recent?query=from:{}".format(
        handle
    )
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    response = requests.request("GET", url, headers=headers)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    json_response =  response.json()

    if json_response['meta']['result_count'] > 0:
        data = json_response["data"]
        for i in data:    
            tweet = i["text"]
            for word in inapp:
                if word.rstrip('\n') in tweet:
                    id = i["id"]
                    print(json.dumps(tweet, indent = 4, sort_keys=True))
                    print(json.dumps(id, indent = 4, sort_keys=True))
                    break

def getData(handle):
    bearer_token = auth()
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

def main():
    a, b = getData("bongo3312")
    print(a)
    print(b)


if __name__ == "__main__":
    main()