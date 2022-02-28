import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import user from "./user";
import post from "./post";

export default combineReducers({
  auth,
  user,
  post,
});
