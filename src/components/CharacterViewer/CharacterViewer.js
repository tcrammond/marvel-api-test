import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './CharacterViewer.css'
import CharacterSelector from './CharacterSelector/CharacterSelector.js'
import CharacterProfile from './CharacterProfile/CharacterProfile.js'
import { fetchCharactersByComicId } from '../../redux/reducers/characters'

/**
 * Displays a scrollable list of characters from a comic alongside the profile of a selected character.
 */
export class CharacterViewer extends PureComponent {
  static propTypes = {
    comicId: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { fetching: false }
  }

  componentWillMount () {
    if (this.props.comicId) this.fetchCharacters(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.comicId !== nextProps.comicId) this.fetchCharacters(nextProps)
  }

  fetchCharacters (props) {
    this.props.fetchCharactersByComicId(props.comicId)
    this.setState({ fetching: true })
  }

  render () {
    return (
      <div>
        CharacterViewer
      </div>
    )
  }

}

// Returns characters from store matching comic IDs
function getCharactersByComicIdSelector (state, comicId) {
  const comic = state.data.comics.entries[comicId] || {}
  const characterIds = _.map(comic.characters.items, (character) => character.resourceURI.match(/characters\/(\d+)/)[1])

  return _.filter(state.data.characters, (character) => _.includes(characterIds, character.id))
}

function mapStateToProps (state, ownProps) {
  return {
    characters: getCharactersByComicIdSelector(state, ownProps.comicId)
  }
}

const mapDispatchToProps = {
  fetchCharactersByComicId
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterViewer)