import { combineReducers } from "redux";
import candidateReducer from "./candidateReducer";

const rootReducer = combineReducers({
  candidate: candidateReducer,
});

export default rootReducer;
