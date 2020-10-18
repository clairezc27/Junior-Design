from google.oauth2 import id_token
from google.auth.transport import requests

def verifyToken():
    # TODO: receive token from front end

    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
    
        # ID token is valid. Get the user's Google Account ID from the decoded token.
        userid = idinfo['sub']
    except ValueError:
        # Invalid token
        pass

    # TODO: check if userid is in database
    # if user not in database, create new session for user