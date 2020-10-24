import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
  isCurrentUserFetched: false,
  isLoggingIn: false,
  isSigningUp: false,
  currentUser: ""
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
      delete state.authorizationError;
    },
    loginSucceeded(state, action) {
      localStorage.setItem('currentUser', action.payload);
      state.isLoggingIn = false;
    },
    loginFailed(state, action) {
      state.isLoggingIn = false;
      state.loginError = action.payload;
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
      state.isCurrentUserFetched = false;
      localStorage.removeItem('currentToken');
      delete state.currentUser;
    }
  }
});

export const {
  getCurrentUser, loginStart, loginSucceeded, loginFailed, logout,
  signupStart, signupSucceeded, signupFailed
} = usersSlice.actions;

export const login = (email, password) => async dispatch => {
  console.log("inside login");
  try {
    dispatch(loginStart());
    const response = await apis.login(email, password);
    dispatch(loginSucceeded(response.data.Authorization));
  } catch (err) {
    dispatch(loginFailed(err.response.data.message));
  }
};

export const signUp = (email, password) => async dispatch => {
  try {
    console.log("signing up")
    dispatch(signupStart());
    await apis.signup(email, password);
    dispatch(signupSucceeded());
  } catch (err) {
    dispatch(signupFailed(err.response.data.message));
  }
};

export default usersSlice.reducer;