import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './CharacterViewer.css'
import CharacterSelector from './CharacterSelector/CharacterSelector'
import CharacterProfile from './CharacterProfile/CharacterProfile'

import api from '../../api/api'
import {
  fetchCharactersByComicId,
  fetchCharactersSuccess,
  fetchCharactersError
} from '../../redux/reducers/characters'

/**
 * Displays a scrollable list of characters from a comic alongside the profile of a selected character.
 */
export class CharacterViewer extends PureComponent {
  static propTypes = {
    comicId: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    if (this.props.comicId) this.fetchCharacters(this.props)
  }

  componentWillReceiveProps (nextProps) {
    // Fetch characters when comic changes
    if (this.props.comicId !== nextProps.comicId) this.fetchCharacters(nextProps)
  }

  fetchCharacters (props) {
    // In lieu of setting up any async effect middleware, we'll handle this directly here.
    this.props.fetchCharactersByComicId(props.comicId)
    api.fetchCharactersByComicId(props.comicId)
      .then((response) => this.props.fetchCharactersSuccess(response.data.data.results))
      .catch((e) => console.error(e) && this.props.fetchCharactersError())
  }

  render () {
    return (
      <div>
        Characters in this comic:
        {this.props.isLoading
          ? <div>Loading...</div>
          : <ul>
              {_.map(this.props.characters, (character) => <li>{character.name}</li>)}
            </ul>}

      </div>
    )
  }

}

// Returns characters from store matching comic IDs
function getCharactersByComicIdSelector (state, comicId) {
  const comic = state.data.comics.entries[comicId] || {}
  const characterIds = _.map(comic.characters.items, (character) => +character.resourceURI.match(/characters\/(\d+)/)[1])

  return _.filter(state.data.characters.entries, (character) => _.includes(characterIds, character.id))
}

function mapStateToProps (state, ownProps) {
  return {
    characters: getCharactersByComicIdSelector(state, ownProps.comicId),
    isLoading: state.data.characters.isLoading
  }
}

const mapDispatchToProps = {
  fetchCharactersByComicId,
  fetchCharactersSuccess,
  fetchCharactersError
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterViewer)