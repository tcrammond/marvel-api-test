const initialState = {
  comic: {
    selectedComicId: 61382
  }
}

const CHANGE_COMIC = 'comicView/CHANGE_COMIC'

// Change comic being viewed on the Comic view
export const changeComic = (id) => ({type: 'comicView/CHANGE_COMIC', id})

// Reducer for the Comic page UI state
export default function demoViewReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COMIC:
      return {
        ...state,
        comic: {
          ...state.comic,
          selectedComicId: action.id
        }
      }
    default:
      return state
  }
}