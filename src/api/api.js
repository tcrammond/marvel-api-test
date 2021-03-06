import axios from 'axios'

const HOST = 'https://gateway.marvel.com/v1/public'
const DEFAULT_PARAMS = {apikey: process.env.REACT_APP_MARVEL_API_KEY}

// Apply parameters, with default values
const params = (options) => Object.assign({}, DEFAULT_PARAMS, options)

// Returns characters associated with the given comic
function fetchCharactersByComicId (comicId) {
  return axios.get(`${HOST}/comics/${comicId}/characters`, {
    params: params()
  })
}

export default {
  fetchCharactersByComicId
}