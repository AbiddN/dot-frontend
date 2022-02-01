import http from "../services/http-common";
import config from "../config";
import axios from "axios";

const signup = (name, username, email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.apiURL}api/users/signup`, {
      name,
      username,
      email,
      password,
    });

    dispatch({
      type: "SIGNUP",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const signin = (unOrEmail, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${config.apiURL}api/users/signin`, {
      unOrEmail,
      password,
    });

    dispatch({
      type: "SIGNIN",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { signup, signin };