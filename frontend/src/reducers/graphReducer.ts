import { ADD_PERSON } from "../actions/types";
import Person from "../utilities/Person";
const initialState = {
  people: [],
};
const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, new Person(action.payload, state.people.length)]
      };
    default:
      return state;
  }
};
export default graphReducer