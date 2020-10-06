import requests
import json
from twitter import *
import config

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()

# To set your enviornment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='AAAAAAAAAAAAAAAAAAAAAGcpIAEAAAAAYwak9qvxg6jmstpttxy%2FbINPPRw%3DfNENXGFTKONDuHjTqZJFme2jrOVHNVfOnNFiqZmyiNSWpTCGwp'


def auth():
    return config.bearerToken


def create_url():
    query = "from:bongo3312"
    # Tweet fields are adjustable.
    # Options include:
    # attachments, author_id, context_annotations,
    # conversation_id, created_at, entities, geo, id,
    # in_reply_to_user_id, lang, non_public_metrics, organic_metrics,
    # possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets,
    # source, text, and withheld
    url = "https://api.twitter.com/2/tweets/search/recent?query={}".format(
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


def main():
    bearer_token = auth()
    url = create_url()
    headers = create_headers(bearer_token)
    json_response = connect_to_endpoint(url, headers)
    data = json_response["data"]
    # print(data)
    for i in data:    
        # print(i)
        tweet = i["text"]
        for word in inapp:
            if word.rstrip('\n') in tweet:
                # date = i["created_at"]
                print(json.dumps(tweet, indent = 4, sort_keys=True))
                # print(json.dumps(date, indent = 4, sort_keys=True))
    print(json.dumps(json_response, indent=4, sort_keys=True))


if __name__ == "__main__":
    main()