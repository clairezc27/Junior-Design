import { createSlice } from '@reduxjs/toolkit';
import apis from "./apis"

const initialState = {
};

const twitterSlice = createSlice({
    name: 'twitter',
    initialState,
    reducers: {
     
    }
});

export const {

} = twitterSlice.actions;

export default twitterSlice.reducer;