import _ from 'lodash'

const initialState = {
  isLoading: false,
  entries: {}
}

const FETCH_CHARACTERS_BY_COMIC_ID = 'characters/FETCH_BY_COMIC_ID'
const FETCH_CHARACTERS_SUCCESS = 'characters/FETCH_SUCCESS'
const FETCH_CHARACTERS_ERROR = 'characters/FETCH_ERROR'

export const fetchCharactersByComicId = (id) => ({type: FETCH_CHARACTERS_BY_COMIC_ID, id})

export default function charactersReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_BY_COMIC_ID:
      return {
        ...state,
        isLoading: true
      }

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entries: {
          ...state.entries,
          ..._.keyBy(action.entries.map(transformCharacter), 'id')
        }
      }

    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

/**
 * Transform API response to a more easily usable format.
 */
function transformCharacter (character) {

}