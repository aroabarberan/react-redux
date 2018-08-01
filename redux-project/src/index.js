import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { App } from './app/components/App'
import { Provider } from "react-redux";


const mathReducer = (state = { result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  return state
}


const userReducer = (state = { name: 'Aroa', age: 23 }, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      }
      break;
  }
  return state
}


const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger)
)


render(<Provider store={store}>
  <App />
</Provider>
  , window.document.getElementById('root'))
