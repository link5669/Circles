import { createStore, combineReducers } from 'redux';
import graphReducer from './reducers/graphReducer';
const rootReducer = combineReducers({
  graph: graphReducer
});
export default createStore(rootReducer);