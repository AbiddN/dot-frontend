import axios from "axios";
import {
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAILURE,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
} from "../constants/postConstants";
import config from "../config";

/* Get all posts */
const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_GET_REQUEST,
    });

    const { data } = await axios.get(`${config.apiURL}post`);

    dispatch({
      type: POST_GET_SUCCESS,
      payload: data.data,
    });
    return Promise.resolve(data.data);
  } catch (error) {
    dispatch({
      type: POST_GET_FAILURE,
      payload: error.response.data.message,
    });
    return Promise.reject(error);
  }
};

/* Create post */
const createPost = (postData) => async (dispatch) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });

    const { data } = await axios.post(`${config.apiURL}post`, postData);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data.data,
    });

    return Promise.resolve(data.data);
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAILURE,
      payload: error.response.data.message,
    });
    return Promise.reject(error);
  }
};

export { getAllPosts, createPost };
