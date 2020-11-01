import axios from 'axios';
var BASE_URL= '/apis';
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://localhost:5000/apis';	
// } else {
//   BASE_URL = '/apis';	
// }

const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/sign-up`;
const GET_TWEETS_URL = `${BASE_URL}/search-tweets`;
const DISPLAY_TWEETS = `${BASE_URL}/display-tweets`;

const login = (email, password) => axios.post(LOGIN_URL, {
  email: email,
  password: password,
});

const signup = (email, password) => axios.post(SIGNUP_URL, {
    email: email,
    password: password
});

const searchTweets = (handle, words, email) => axios.post(GET_TWEETS_URL, {
    handle: handle,
    words: words,
    email: email
})

const displayTweets = (batch) => axios.post(DISPLAY_TWEETS, {
    batch: batch
})
  

export default {
  login, signup, searchTweets
}