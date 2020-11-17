import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
  isSearchingTweets: false,
  isFetchingBatches: false,
  isFetchingTweets: false,
  tweets: [],
  batches: []
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
    fetchBatchesStart(state) {
      state.isFetchingBatches = true;
    },
    fetchBatchesSucceeded(state, action) {
      state.isFetchingBatches = false;
      state.batches = action.payload;
      delete state.fetchBatchError;
    },
    fetchBatchesFailed(state, action) {
      state.isFetchingBatches = false;
      state.fetchBatchError = action.payload;
    },
    fetchTweetsStart(state) {
      state.isFetchingTweets = true;
    },
    fetchTweetsSucceeded(state, action) {
      state.isFetchingTweets = false;
      state.tweets = action.payload;
      delete state.fetchTweetsError;
    },
    fetchTweetsFailed(state, action) {
      state.isFetchingTweets = false;
      state.fetchTweetsError = action.payload;
    },
    clearInfo(state) {
      state.tweets = [];
      state.batches = [];
    },
    clearT(state) {
      state.tweets = [];
    }
  }
});



export const {
  searchStart, searchSucceeded, searchFailed, fetchBatchesStart,
  fetchBatchesSucceeded, fetchBatchesFailed, fetchTweetsStart,
  fetchTweetsSucceeded, fetchTweetsFailed, clearInfo, clearT
} = twitterSlice.actions;

export const searchTweets = (handle, words, email) => async dispatch => {
  try {
    dispatch(searchStart())
    await apis.searchTweets(handle, words, email)
    dispatch(searchSucceeded())
  } catch (err) {
    dispatch(searchFailed(err.toString()))
  }
}

export const fetchBatches = (user) => async dispatch => {
  try {
    dispatch(fetchBatchesStart())
    const response = await apis.fetchBatches(user)
    dispatch(fetchBatchesSucceeded(response.data))
  } catch (err) {
    dispatch(fetchBatchesFailed(err.toString()))
  }
}

export const fetchTweets = (batch) => async dispatch => {
  try {
    dispatch(fetchTweetsStart())
    const response = await apis.fetchTweets(batch)
    dispatch(fetchTweetsSucceeded(response.data))
  } catch (err) {
    dispatch(fetchTweetsFailed(err.toString()))
  }
}

export const clearStore = () => async dispatch => {
  dispatch(clearInfo());
}

export const clearTweets = () => async dispatch => {
  dispatch(clearT());
}

export default twitterSlice.reducer;