import { ADD_PERSON, ADD_FRIEND } from "../actions/types";
import Person from "../utilities/Person";

const initialState = {
  people: [],
  graph: [],
};

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      let newGraph = [...state.graph]
      newGraph.push(new Array(newGraph.length).fill(0))
      for (let i = 0; i < state.graph.length; i++) {
        newGraph[i].push(0)
      }
      return {
        ...state,
        people: [
          ...state.people,
          new Person(action.payload, state.people.length),
        ],
        graph: newGraph
      };
    case ADD_FRIEND:
      newGraph = [...state.graph]
      newGraph[action.payload.end][action.payload.start] = 1
      return {
        ...state,
        graph: newGraph
      }
    default:
      return state;
  }
};
export default graphReducer;
