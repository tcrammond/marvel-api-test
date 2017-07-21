import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import striptags from 'striptags'
import _ from 'lodash'

import './CharacterProfile.css'

// Displays how many comics the character is listed as being in
const ComicCount = ({ character }) => <p>Present in {character.comics.available} comics.</p>

// Displays the first comic (at least the first comic returned) the character was listed in
const FirstSeenIn = ({ character }) => <p>First seen in "{character.comics.items[0].name}".</p>

// Displays links to official Marvel pages
const Links = ({ character }) => {
  const links = _.keyBy(character.urls, 'type')
  return (
    <div className='CharacterProfile__links'>
      <a href={links.detail.url} target='_blank'>Official page</a>
      <a href={links.wiki.url} target='_blank'>Wiki entry</a>
    </div>
  )
}

/**
 * Renders a character's profile (description, stats, etc).
 */
export default function CharacterProfile ({ character }) {
  if (!character) return null

  return (
    <div className='CharacterProfile__container'>
      <div className='CharacterProfile__photo'>
        <img src={character.thumbnail} />
      </div>
      <div className='CharacterProfile__details'>
        <h3>{character.name}</h3>
        <h4>About</h4>
        <p>{striptags(character.description) || 'Classified.'}</p>

        <hr />

        <h4>Info</h4>
        <ComicCount character={character} />
        <FirstSeenIn character={character} />
        <Links character={character} />
      </div>

    </div>
  )
}
CharacterProfile.propTypes = {
  character: PropTypes.object
}