import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './CharacterSelector.css'

/**
 * Allows user to select which character they wish to view more information on.
 */
export default class CharacterSelector extends PureComponent {
  static propTypes = {
    characters: PropTypes.object.isRequired,
    selectedCharacterId: PropTypes.number,
    onSelectCharacter: PropTypes.func
  }

  renderCharacter = (character) => {
    const { onSelectCharacter, selectedCharacterId } = this.props
    return <Character
      key={character.id}
      character={character}
      isSelected={character.id === selectedCharacterId}
      onClick={onSelectCharacter}
    />
  }

  render () {
    const isEmpty = !_.size(this.props.characters)

    return (
      <div className='CharacterSelector__container'>
        {isEmpty
          ? <div>None listed.</div>
          : _.map(this.props.characters, this.renderCharacter)
        }
      </div>
    )
  }

}

export function Character ({ character, isSelected, onClick }) {
  const className = isSelected ? 'CharacterSelector__item--selected' : 'CharacterSelector__item'
  return <div onClick={() => onClick(character.id)} className={className} style={{backgroundImage: `url(${character.thumbnail})`}} />
}