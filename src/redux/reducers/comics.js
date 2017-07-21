// Dummy comic IDs
const initialState = {
  entries: {
    61382: { id: 61382 },
    61381: { id: 61381 },
    61380: { id: 61381 },
    61379: { id: 61381 },
    61378: { id: 61381 },
    59600: { id: 61381 },
    61377: { id: 61381 },
    62766: { id: 61381 },
    61376: { id: 61381 },
    62507: { id: 61381 },
    59598: { id: 61381 },
    61375: { id: 61381 }
  }
}

export default function comicsReducer (state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}