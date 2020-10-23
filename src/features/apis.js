import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';
const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/signup`;
const GET_TWEETS_URL = `${BASE_URL}/get-tweets`;

const login = (email, password) => axios.post(LOGIN_URL, {
    email: email,
    password: password
  });

const signup = (email, password) => axios.post(SIGNUP_URL, {
    email: email,
    password: password
  });

const getTweets = () => axios.post(GET_TWEETS_URL);
  

export default {
  login, signup, getTweets
}