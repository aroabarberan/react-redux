export function createHero(hero) {
  return {
    type: 'CREATE_HERO',
    payload: hero
  }
}

export function editHero(idHero, value) {
  return {
    type: 'EDIT_HERO',
    payload: idHero,
    value: value
  }
}

export function removeHero(idHero) {
  return {
    type: 'REMOVE_HERO',
    payload: idHero
  }
}

export function selectHero(idHero) {
  return {
    type: 'SELECT_HERO',
    payload: idHero
  }
}

export function unSelectHero() {
  return {
    type: 'UNSELECT_HERO',
  }
}

export function sortHeroesByName() {
  return {
    type: 'SORT_HEROES_BY_NAME',
  }
}

export function listAllHeroes() {
  return {
    type: 'LIST_ALL_HEROES',
  }
}

export function listAllNameOfHeroes() {
  return {
    type: 'LIST_ALL_NAME_HEROES',
  }
}