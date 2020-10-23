import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
  isCurrentUserFetched: false,
  isLoggingIn: false,
  isSigningUp: false,
};

const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getCurrentUser(state) {
      const currentUser = localStorage.getItem('currentUser');
      state.isCurrentUserFetched = true;
      try {
        state.currentUser = JSON.parse(currentUser);
      } catch (e) {
        console.error(e);
      }
    },
    loginStart(state, _action) {
      state.isLoggingIn = true;
      delete state.loginError;
    },
    loginSucceeded(state, action) {
      localStorage.setItem('currentUser', JSON.stringify(action.payload));

      state.isLoggingIn = false;
      state.currentUser = action.payload;
    },
    loginFailed(state) {
      state.isLoggingIn = false;
      state.loginError = 'Login Failed';
    },
    logout(state) {
      localStorage.removeItem('currentUser');
      delete state.currentUser;
    },
    signupStart(state, _action) {
      state.isSigningUp = true;
      delete state.signupError;
    },
    signupSucceeded(state) {
      state.isSigningUp = false;
    },
    signupFailed(state, action) {
      state.isSigningUp = false;
      state.signupError = action.payload;
    },
    logout(state) {
      localStorage.removeItem('currentUser');
      delete state.currentUser;
    },
  },
});

export const {
  getCurrentUser, loginStart, loginSucceeded, loginFailed, logout,
  signupStart, signupSucceeded, signupFailed
} = usersSlice.actions;

export const login = (username, password) => async dispatch => {
  try {
    dispatch(loginStart())
    const response = await apis.login(username, password)
    dispatch(loginSucceeded(response))
  } catch (err) {
    dispatch(loginFailed(err.toString()))
  }
}

export const signUp = (email, password) => async dispatch => {
  try {
    dispatch(signupStart());
    await apis.signup(email, password);
    dispatch(signupSucceeded());
  } catch (err) {
    dispatch(signupFailed(err.response.data.message));
  }
};

export default usersSlice.reducer;