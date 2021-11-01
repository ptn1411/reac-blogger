import { combineReducers } from "redux";
import crud from "./crud";
import post from "./post";

export default combineReducers({
    crud,
    post
});