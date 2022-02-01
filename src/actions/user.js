import http from "../services/http-common";
import config from "../config";
import axios from "axios";

const getMyProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.apiURL}api/users/current_user`);

    dispatch({
      type: "GET_MY_PROFILE",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { getMyProfile };
