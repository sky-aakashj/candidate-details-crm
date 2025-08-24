import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// Create middleware array
const middleware = [thunk];

const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;
