const initialState = [];

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MY_PROFILE":
      return {
        ...state,
        user: payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
