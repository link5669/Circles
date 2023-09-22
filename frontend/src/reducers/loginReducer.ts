import { LOG_IN, LOG_OUT } from "../actions/types";

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          username: action.payload.username,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
export default loginReducer;
