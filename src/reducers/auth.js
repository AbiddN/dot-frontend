const initialState = [];

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SIGNUP":
            return {
                ...state,
                user: payload,
                isLoggedIn: true,
                isLoading: false,
                error: null,
            };
        case "SIGNIN":
            return {
                ...state,
                user: payload,
                isLoggedIn: true,
                isLoading: false,
                error: null,
                
            };
        case "LOGOUT":
            return {
                ...state,
                user: {},
                isLoggedIn: false,
                isLoading: false,
                error: null,
            };
        default:
            return state;
        }
}

export default authReducer;