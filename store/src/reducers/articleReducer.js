const articleReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      state = {
        articles: [...state.articles, action.payload]
        // articles: [...state.articles,{ title: 'bla', id: 1 }]
      }
      break;
  }
  return state
}

export default articleReducer