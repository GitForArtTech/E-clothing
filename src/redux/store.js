import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewarese = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewarese));

export default store;
