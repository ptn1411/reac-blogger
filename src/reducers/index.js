import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import dashboard from "./dashboard";
import chat from "./chat";
export default combineReducers({
    user,
    post,
    dashboard,
    chat
});