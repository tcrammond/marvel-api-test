import React from 'react'
import { mount } from 'enzyme'
import CharacterSelector, { Character } from './CharacterSelector'

const characters = {
  1: { id: 1, thumbnail: '' },
  2: { id: 2, thumbnail: '' },
  3: { id: 3, thumbnail: '' }
}

describe('CharacterSelector', function () {

  it('triggers character change when a character is clicked', function () {
    const onClickSpy = jest.fn()
    const wrapper = mount(<CharacterSelector characters={characters} selectedCharacterId={2} onSelectCharacter={onClickSpy} />)

    // Simulate clicking the third Character [id=3]
    const characterNodes = wrapper.find(Character)
    characterNodes.at(2).simulate('click')

    expect(onClickSpy.mock.calls.length).toBe(1)
    expect(onClickSpy.mock.calls[0][0]).toBe(3)
  })

})

