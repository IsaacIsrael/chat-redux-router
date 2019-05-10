import { applyMiddleware, compose } from 'redux';

import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));


