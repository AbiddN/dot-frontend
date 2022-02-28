import {
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAILURE,
} from "../constants/userConstants";
const initialState = [];

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MY_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: payload,
      };
    case GET_MY_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
