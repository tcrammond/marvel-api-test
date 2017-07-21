import { combineReducers } from 'redux'
import comics from './comics.js'
import characters from './characters.js'
import demoViewReducer from './view.js'

const marvelApp = combineReducers({
  data: combineReducers({
    comics,
    characters
  }),
  view: demoViewReducer
})

export default marvelApp