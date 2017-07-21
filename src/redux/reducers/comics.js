// Dummy comic data.
const initialState = {
  entries: require('./comics.json')
}

export default function comicsReducer (state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}