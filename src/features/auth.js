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
    signupSucceeded(state) {
      state.isSigningUp = false;
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

export const login = (email, password) => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await apis.login(email, password);
    dispatch(loginSucceeded(response.data.email));
  } catch (err) {
    dispatch(loginFailed(err.response));
  }
};

export const signUp = (email, password) => async dispatch => {
  try {
    dispatch(signupStart());
    await apis.signup(email, password);
    dispatch(signupSucceeded());
  } catch (err) {
    dispatch(signupFailed(err.response.data.message));
  }
};

export const logOut = (user) => async dispatch => {
  try {
    dispatch(logout());
  } catch (err) {

  }
};

export default usersSlice.reducer;