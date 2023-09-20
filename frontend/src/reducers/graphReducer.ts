import { ADD_PERSON } from "../actions/types";
import Person from "../utilities/Person";
import { createStore } from "redux";
const initialState = {
  people: 0,
};
const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: state.people + 1,
      };
    default:
      return state;
  }
};
export default graphReducer
