import config from "../config";
import {
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAILURE,
} from "../constants/userConstants";
import axios from "axios";

const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_PROFILE_REQUEST,
    });

    const { data } = await axios.get(`${config.apiURL}users/current_user`);

    dispatch({
      type: GET_MY_PROFILE_SUCCESS,
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (error) {
    dispatch({
      type: GET_MY_PROFILE_FAILURE,
      payload: error.response.data.message,
    });
    return Promise.reject(error);
  }
};

export { getMyProfile };
