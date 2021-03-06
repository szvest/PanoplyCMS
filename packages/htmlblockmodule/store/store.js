import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/reducers.js';


export default store = createStore(reducers, applyMiddleware(thunk, logger));