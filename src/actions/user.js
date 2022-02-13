import http from "../services/http-common";
import config from "../config";
import axios from "axios";

const getMyProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${config.apiURL}api/users/current_user`);

    dispatch({
      type: "GET_MY_PROFILE",
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getMyProfile };
