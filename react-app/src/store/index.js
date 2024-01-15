import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import favouritesReducers from "../reducers/favouritesReducers";

const store = createStore(favouritesReducers, applyMiddleware(thunk));

export default store;
