import _ from 'lodash'

const initialState = {
  isLoading: false,
  entries: {}
}

const FETCH_CHARACTERS_BY_IDS = 'characters/FETCH_BY_IDS'
const FETCH_CHARACTERS_SUCCESS = 'characters/FETCH_SUCCESS'
const FETCH_CHARACTERS_ERROR = 'characters/FETCH_ERROR'

export const fetchCharactersByIds = (ids) => ({type: FETCH_CHARACTERS_BY_IDS, ids})

export default function charactersReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_BY_IDS:
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