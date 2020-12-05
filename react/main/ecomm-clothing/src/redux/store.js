import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // use when debugging redux code

import rootReducer from './root-reducer';

const middlewares = [logger]; // array of middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; // passed to index.js as a prop of <Provider />
