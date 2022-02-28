import {
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAILURE,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
} from "../constants/postConstants";

const initialState = [];

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    case POST_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case POST_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, payload],
      };
    case POST_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
