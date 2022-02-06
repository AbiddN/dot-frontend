import http from "../services/http-common";
import config from "../config";
import axios from "axios";

const signup = (name, username, email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${config.apiURL}api/users/signup`, {
      name,
      username,
      email,
      password,
    });

    dispatch({
      type: "SIGNUP",
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

const signin = (unOrEmail, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${config.apiURL}api/users/signin`, {
      unOrEmail,
      password,
    });

    dispatch({
      type: "SIGNIN",
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export { signup, signin };
