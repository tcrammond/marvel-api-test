import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { changeComic } from '../../redux/reducers/view'
import CharacterViewer from './../../components/CharacterViewer/CharacterViewer.js'

// Switch between hard-coded comic IDs for the demo.
function ComicSwitcher ({comics, onSelectComic, selectedComicId}) {
  const onChange = (event) => onSelectComic(+event.target.value)
  const comicsWithCharacters = _.filter(comics, (comic) => comic.characters.available > 0)

  return (
    <select value={selectedComicId} onChange={onChange}>
      {_.map(comicsWithCharacters, (comic) => <option key={comic.id} value={comic.id}>{comic.title}</option>)}
    </select>
  )
}

/**
 * Page / main container for this demo.
 */
class ComicPage extends PureComponent {
  static propTypes = {
    comics: PropTypes.object.isRequired,
    selectedComic: PropTypes.object.isRequired
  }

  render () {
    const { comics, changeComic, selectedComic } = this.props

    return (
      <div>
        <ComicSwitcher comics={comics} selectedComic={selectedComic.id} onSelectComic={changeComic} />
        <CharacterViewer comicId={selectedComic.id} />
      </div>
    )
  }

}

const selectedComicSelector = (state) => state.data.comics.entries[state.view.comic.selectedComicId]

function mapStateToProps (state) {
  return {
    comics: state.data.comics.entries,
    selectedComic: selectedComicSelector(state)
  }
}

const mapDispatchToProps = {
  changeComic
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicPage)