export default mathReducer = (state = { result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + state.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - state.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  return state
}