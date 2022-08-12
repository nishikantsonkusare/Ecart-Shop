import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const middleware = [thunk];
const initialData = {};

const store = createStore(
  rootReducer,
  initialData,
  applyMiddleware(...middleware)
);

export default store;
