import { createStore, combineReducers } from "redux";
import graphReducer from "./reducers/graphReducer";
import loginReducer from "./reducers/loginReducer";
const rootReducer = combineReducers({
  people: graphReducer,
  login: loginReducer
});
export default createStore(rootReducer);
