import { combineReducers } from 'redux';
import authReducer from "./../features/auth";
import twitterReducer from  "./../features/twitter";

const rootReducer = combineReducers({
    auth: authReducer,
    twitter: twitterReducer
});

export default rootReducer;