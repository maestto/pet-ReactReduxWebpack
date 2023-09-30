import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from "./postsReducer";
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))