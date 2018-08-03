
let initialState = {
  heroes: [
    {
      id: 1,
      name: 'Hulk',
      color: 'green',
      url: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png'
    }, {
      id: 2,
      name: 'Thor',
      color: 'blue',
      url: 'https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/7a/42/91/7a429166-3c7f-9a98-bd13-e1f74c0f01e3/source/1200x630bb.jpg'
    }, {
      id: 3,
      name: 'Spiderman',
      color: 'red',
      url: 'https://cdn.wccftech.com/wp-content/uploads/2018/04/Spider-Man_PS4_Crouch.jpg'
    }, {
      id: 4,
      name: 'Captain American',
      color: 'blue',
      url: 'https://d2jljza7x0a5yy.cloudfront.net/media/k2/items/cache/ef1967223c9adfad3d0bc3925439651e_XL.jpg?t=1464157377'
    }
  ],
  selectedHero: null,
}

export const heroes = (state = initialState, action) => {
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

    case 'SORT_HEROES_BY_NAME':
      let heroes = [...state.heroes]
      state = {
        heroes: heroes.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) ? 1 : 0),
        selectedHero: state.selectedHero
      }
      break

    case 'LIST_ALL_HEROES':
      state = {
        heroes: [...state.heroes],
        selectedHero: state.selectedHero
      }
      break

    case 'LIST_ALL_NAME_HEROES':
      state = {
        heroes: state.heroes.map(e => e.name),
        selectedHero: state.selectedHero
      }
      break

    default:
      return state
  }
  return state
}
