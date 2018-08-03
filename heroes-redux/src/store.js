import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { heroes } from './reducers/heroReducer'


export default createStore(
  combineReducers({ heroes }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)

