import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import immutable from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = (state = { heroes: [], selectedHero: null }, action) => {
  switch (action.type) {
    case 'CREATE_HERO':
      state = {
        heroes: [...state.heroes, action.payload],
        selectedHero: state.selectedHero
      }
      break

    case 'EDIT_HERO':
      state = {
        heroes: [...state.heroes.map((e => {
          if (e.id === action.payload) e = action.value
          return e
        }))],
        selectedHero: state.selectedHero
      }
      break

    case 'REMOVE_HERO':
      state = {
        heroes: state.heroes.filter((e => e.id !== action.payload))
      }
      break

    case 'SELECT_HERO':
      state = {
        heroes: [...state.heroes],
        selectedHero: state.heroes.filter(e => e.id === action.payload)[0]
      }
      break

    case 'UNSELECT_HERO':
      state = {
        heroes: [...state.heroes],
        selectedHero: null
      }
      break

    case 'LIST_ALL_HEROES':
      state = {
        heroes: [...state.heroes],
        selectedHero: state.selectedHero
      }
      break
    case 'SORT_HEROES_BY':
      state = {
        heroes: [...state.heroes.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? 1 : 0)],
        selectedHero: state.selectedHero
      }
      break
  }
  return state
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, immutable())))

store.dispatch({
  type: 'CREATE_HERO',
  payload: {
    id: 1,
    name: 'Hulk',
    color: 'green'
  }
})

store.dispatch({
  type: 'CREATE_HERO',
  payload: {
    id: 2,
    name: 'Thor',
    color: 'blue'
  }
})

store.dispatch({
  type: 'CREATE_HERO',
  payload: {
    id: 3,
    name: 'Spiderman',
    color: 'red'
  }
})

store.dispatch({
  type: 'REMOVE_HERO',
  payload: 1
})

store.dispatch({
  type: 'SELECT_HERO',
  payload: 2
})

store.dispatch({
  type: 'SELECT_HERO',
  payload: 3
})

store.dispatch({
  type: 'CREATE_HERO',
  payload: {
    id: 4,
    name: 'Captain American',
    color: 'blue'
  }
})

store.dispatch({
  type: 'EDIT_HERO',
  payload: 2,
  value: {
    id: 2,
    name: 'Thor',
    color: 'grey'
  }
})

store.dispatch({
  type: 'UNSELECT_HERO'
})

store.dispatch({
  type: 'LIST_ALL_HEROES',
})

store.dispatch({
  type: 'SORT_HEROES_BY_NAME',
  payload: 'name'
})

// const arr = [{
//   id: 2,
//   name: 'Thor',
//   color: 'grey'
// }, {
//   id: 3,
//   name: 'Spiderman',
//   color: 'red'
// }
//   , {
//   id: 4,
//   name: 'Captain American',
//   color: 'blue'
// }]

// console.log([...arr.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? 1 : 0)])