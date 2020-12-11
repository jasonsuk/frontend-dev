import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // use when debugging redux code
import { persistStore } from 'redux-persist'; // localstorage under the hood

import rootReducer from './root-reducer';

const middlewares = [logger]; // array of middlewares

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor }; // passed to index.js as a prop of <Provider />
