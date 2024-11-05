import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import Logger from 'redux-logger';
import { thunk } from 'redux-thunk'; // Change this line
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, applyMiddleware(Logger, thunk));

// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(Logger, thunk)));

export default store;
