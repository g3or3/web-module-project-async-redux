import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
