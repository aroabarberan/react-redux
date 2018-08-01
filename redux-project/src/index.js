// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import { createStore } from "redux";

const initialState = {
  result: 1,
  lastValues: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state.result += action.payload
      break;
    case "SUBSTRACT":
    state.result -= action.payload
      break;
    default:
      break;
  }
  return state
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('Store update', store.getState())
})

store.dispatch({
  type: 'ADD',
  payload: 100
})
store.dispatch({
  type: 'SUBSTRACT',
  payload: 10
})


