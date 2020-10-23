import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';
const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/signup`;

const login = (username, password) =>
  axios.post(LOGIN_URL, {username, password});

const signup = (username, password) =>
  axios.post(SIGNUP_URL, {username, password});
  

export default {
  login, signup
}