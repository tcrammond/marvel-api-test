const initialState = {
  comic: {
    selectedComicId: 61382
  }
}

const CHANGE_COMIC = 'comicView/CHANGE_COMIC'

export const changeComic = (id) => ({type: 'comicView/CHANGE_COMIC', id})

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