import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './src/Commons/Redux/rootReducer';
const middleware = [thunk];

const initialState = {};
export default createStore(rootReducer, initialState, applyMiddleware(...middleware));