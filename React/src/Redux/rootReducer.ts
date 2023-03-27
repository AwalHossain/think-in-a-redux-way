import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { dyCounterReducer } from "./dynamic/dyCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dyCounterReducer,
});

export default rootReducer;
