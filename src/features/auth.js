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
    loginStart(state, _action) {
      state.isLoggingIn = true;
      delete state.loginError;
      delete state.authorizationError;
    },
    loginSucceeded(state, action) {
      localStorage.setItem('currentUser', action.payload);
      state.currUser = action.payload;
      state.isLoggingIn = false;
    },
    loginFailed(state, action) {
      state.isLoggingIn = false;
      state.loginError = action.payload;
    },
    logout(state) {
      localStorage.removeItem('currentUser');
      delete state.currUser;
    },
    signupStart(state, _action) {
      state.isSigningUp = true;
      delete state.signupError;
    },
    signupSucceeded(state, action) {
      state.isSigningUp = false;
      state.currUser = action.payload;
    },
    signupFailed(state, action) {
      state.isSigningUp = false;
      state.signupError = action.payload;
    }
  }
});

export const {
  getCurrentUser, loginStart, loginSucceeded, loginFailed, logout,
  signupStart, signupSucceeded, signupFailed
} = usersSlice.actions;

export const login = (email, password, callbackSucceed, callbackFailed) => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await apis.login(email, password);
    dispatch(loginSucceeded(response.data.email));
    callbackSucceed();
  } catch (err) {
    console.log("login failed")
    dispatch(loginFailed(err.response));
    callbackFailed();
  }
};

export const signUp = (email, password, callbackSucceed, callbackFailed) => async dispatch => {
  try {
    dispatch(signupStart());
    const response = await apis.signup(email, password);
    console.log("response: " + response.data.email)
    dispatch(signupSucceeded(response.data.email));
    callbackSucceed();
  } catch (err) {
    dispatch(signupFailed(err.response.data.message));
    callbackFailed();
  }
};

export const logOut = (user) => async dispatch => {
  try {
    dispatch(logout());
  } catch (err) {

  }
};

export default usersSlice.reducer;