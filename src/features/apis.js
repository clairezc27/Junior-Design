import axios from 'axios';

const BASE_URL = 'http://localhost:5000/apis';
const LOGIN_URL = `${BASE_URL}/login`;

const login = (username, password) =>
  axios.post(LOGIN_URL, {username, password});

export default {
  login,
}