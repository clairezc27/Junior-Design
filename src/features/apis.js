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
const FETCH_BATCHES_URL = `${BASE_URL}/fetch-batches`;
const FETCH_TWEETS_URL = `${BASE_URL}/fetch-tweets`;
const DELETE_USER_URL = `${BASE_URL}/delete-user`;
const RESET_USER_URL = `${BASE_URL}/reset-user`;

const login = (email, password) => axios.post(LOGIN_URL, {
  email: email,
  password: password,
});

const signup = (email, password) => axios.post(SIGNUP_URL, {
  email: email,
  password: password
});

const deleteUser = (email) => axios.post(DELETE_USER_URL, {
  email: email
});

const resetUser = (email, password) => axios.post(RESET_USER_URL, {
  email: email,
  password, password
})

const searchTweets = (handle, words, email) => axios.post(GET_TWEETS_URL, {
  handle: handle,
  words: words,
  email: email
})

const fetchBatches = (user) => axios.post(FETCH_BATCHES_URL, {
  user: user
})

const fetchTweets = (batch) => axios.post(FETCH_TWEETS_URL, {
  batch: batch
})
  

export default {
  login, signup, searchTweets, fetchBatches, fetchTweets, deleteUser, resetUser
}