import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './CharacterViewer.css'
import CharacterSelector from './CharacterSelector/CharacterSelector.js'
import CharacterProfile from './CharacterProfile/CharacterProfile.js'
import { fetchCharactersByIds } from '../../redux/reducers/characters'

/**
 * Displays a scrollable list of characters alongside the profile of a selected character.
 */
export class CharacterViewer extends PureComponent {
  static propTypes = {
    characterIds: PropTypes.arrayOf(PropTypes.number).isRequired
  }

  constructor (props) {
    super(props)
    this.state = { fetching: false }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.characterIds !== nextProps.characterIds) {
      // Check if any characters need fetching
      if (nextProps.characterIds.length !== _.size(nextProps.characters)) {
        const missingCharacterIds = _.difference(nextProps.characterIds, _.keys(nextProps.characters))
        this.props.fetchCharactersByIds(missingCharacterIds)

        this.setState({ fetching: true })
      }
    }
  }

  render () {
    return (
      <div>
        CharacterViewer
      </div>
    )
  }

}

// Returns characters from store matching given IDs
function getCharactersByIdSelector (state, ids) {
  return _.filter(state.data.characters, (character) => _.includes(ids, character.id))
}

function mapStateToProps (state, ownProps) {
  return {
    characters: getCharactersByIdSelector(state, ownProps.characterIds)
  }
}

const mapDispatchToProps = {
  fetchCharactersByIds
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterViewer)