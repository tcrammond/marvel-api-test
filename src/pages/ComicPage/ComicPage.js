import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { changeComic } from '../../redux/reducers/view'
import CharacterViewer from './../../components/CharacterViewer/CharacterViewer.js'

// Switch between hard-coded comic IDs for the demo.
function ComicSwitcher ({comics, onSelectComic, selectedComicId}) {
  const onChange = (event) => onSelectComic(+event.target.value)

  return (
    <select value={selectedComicId} onChange={onChange}>
      {_.map(comics, (comic) => <option value={comic.id}>{comic.title}</option>)}
    </select>
  )
}

class ComicPage extends PureComponent {
  static propTypes = {
    comics: PropTypes.object.isRequired,
    selectedComic: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        <ComicSwitcher comics={this.props.comics} selectedComic={this.props.selectedComic.id} onSelectComic={this.props.changeComic} />
        <CharacterViewer />
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