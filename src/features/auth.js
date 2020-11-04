import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
  isCurrentUserFetched: false,
  isLoggingIn: false,
  isSigningUp: false,
  isDeleting: false
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
    },
    deleteStart(state) {
      state.isDeleting = true;
      delete state.deleteError;
    },
    deleteSucceeded(state) {
      localStorage.removeItem('currentUser');
      delete state.currUser;
      state.deleteError = false;
    },
    deleteFailed(state, action) {
      state.isDeleting = false;
      state.deleteError = action.payload;
    }
  }
});

export const {
  getCurrentUser, loginStart, loginSucceeded, loginFailed, logout,
  signupStart, signupSucceeded, signupFailed, deleteStart, deleteSucceeded, deleteFailed
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
    dispatch(signupSucceeded(response.data.email));
    callbackSucceed();
  } catch (err) {
    dispatch(signupFailed(err.response.data.message));
    callbackFailed();
  }
};

export const logOut = () => async dispatch => {
  try {
    dispatch(logout());
  } catch (err) {

  }
};

export const deleteUser = (email) => async dispatch => {
  try {
    dispatch(deleteStart());
    await apis.deleteUser(email);
    dispatch(deleteSucceeded());
  } catch (err) {
    dispatch(deleteFailed(err.response));
  }
}

export default usersSlice.reducer;