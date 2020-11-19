# Twitter Flagger
A React Flask app that flags potentially inappropriate Twitter posts.

## Release Notes
### New software features

- A user can input a Twitter handle and extra search parameters and receive a number of flagged tweets.
- A user can view their flagged tweets. Clicking on the tweet will redirect the user to Twitter to view the actual tweet.
- A user can delete their account and change their password.

### Bug fixes since last release

- Can now parse through tweets with apostrophes
- Previously unable to find a potentially inappropriate word at the beginning or end of a tweet
- Previously had to logout and log back into account to see flagged tweets of new search

### Known bugs and defects

## Install Guide
### Pre-requisites

- python3
- npm

### Dependent libraries that must be installed

- Google SDK
- Redux
- Antd
- React Bootstrap
- React
- Heroku CLI

### Download instructions

In the command line type:

- npm install
- pip3 -r install requirements.txt

### Build instructions

In the command line type:

- npm run build

### Installation of actual application
- none

### Run instructions

In the command line type:

- heroku local

## Trouble Shooting
- select Python Interpreter to be 3.8 from IDE settings


