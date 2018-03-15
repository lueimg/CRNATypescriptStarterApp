import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics';
import logger from "./middlewares/Logger";
const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};
const middleware = applyMiddleware(logger, epicMiddleware);
let store = createStore(rootReducer, initialState, middleware);

export default store;