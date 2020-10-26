import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
  isSearchingTweets: false,
  isFetchingBatch: false,
  tweets: []
};

const twitterSlice = createSlice({
  name: 'twitter',
  initialState,
  reducers: {
    searchStart(state) {
      state.isSearchingTweets = true;
    },
    searchSucceeded(state) {
      state.isSearchingTweets = false;
      delete state.searchError;
    },
    searchFailed(state, action) {
      state.isSearchingTweets = false;
      state.searchError = action.payload;
    },
    fetchStart(state) {
      state.isFetchingBatch = true;
    },
    fetchSucceeded(state, action) {
      state.isFetchingBatch = false;
      state.tweets = action.payload;
      delete state.fetchError;
    },
    fetchFailed(state, action) {
      state.isFetchingBatch = false;
      state.fetchError = action.payload;
    }
  }
});

export const {
  searchStart, searchSucceeded, fetchStart, fetchSucceeded, searchFailed, fetchFailed
} = twitterSlice.actions;

export const searchTweets = (handle, words, email) => async dispatch => {
  try {
    dispatch(searchStart())
    await apis.getTweets(handle, words, email)
    dispatch(searchSucceeded())
  } catch (err) {
    dispatch(searchFailed(err.toString()))
  }
}

export const fetchTweets = (batch) => async dispatch => {
  try {
    dispatch(fetchStart())
    const response = await apis.displayTweets(batch)
    dispatch(fetchSucceeded(response))
  } catch (err) {
    dispatch(fetchFailed(err.toString()))
  }
}

export default twitterSlice.reducer;