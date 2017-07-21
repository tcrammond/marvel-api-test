import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

import './App.css'
import ComicPage from './pages/ComicPage/ComicPage.js'

class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ComicPage />
      </Provider>
    )
  }
}

export default App
