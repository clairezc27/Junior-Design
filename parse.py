
import json

with open('tweets.json', 'r') as f:
  data = json.load(f)

with open('inappropriatelist.txt', 'r') as il:
  inapp = il.readlines()

for i in data:    
	tweet = i["text"]
	for word in inapp:
		if word.rstrip('\n') in tweet:
			date = i["created_at"]
			print(json.dumps(tweet, indent = 4, sort_keys=True))
			print(json.dumps(date, indent = 4, sort_keys=True))
