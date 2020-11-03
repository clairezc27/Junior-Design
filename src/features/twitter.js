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
    }
  }
});



export const {
  searchStart, searchSucceeded, searchFailed, fetchBatchesStart, fetchBatchesSucceeded, fetchBatchesFailed, fetchTweetsStart, fetchTweetsSucceeded, fetchTweetsFailed
} = twitterSlice.actions;

export const searchTweets = (handle, words, email) => async dispatch => {
  try {
    dispatch(searchStart())
    const response = await apis.searchTweets(handle, words, email)
    console.log(response)
    dispatch(searchSucceeded())
  } catch (err) {
    dispatch(searchFailed(err.toString()))
  }
}

export const fetchBatches = (user) => async dispatch => {
  try {
    dispatch(fetchBatchesStart())
    const response = await apis.fetchBatches(user)
    console.log("redux: " + response)
    dispatch(fetchBatchesSucceeded(response))
  } catch (err) {
    dispatch(fetchBatchesFailed(err.toString()))
  }
}

export const fetchTweets = (batch) => async dispatch => {
  try {
    dispatch(fetchTweetsStart())
    const response = await apis.fetchTweets(batch)
    console.log("redux: " + response)
    dispatch(fetchTweetsSucceeded(response))
  } catch (err) {
    dispatch(fetchTweetsFailed(err.toString()))
  }
}

export default twitterSlice.reducer;