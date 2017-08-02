/* global describe, beforeEach it, expect, jest */
import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './SearchBar'

describe('<SearchBar /> tests', () => {
  let wrapper
  const spy = jest.fn()
  const props = {
    searchTerm: 'original searchTerm',
    updateSearchTerm: spy
  }
  const updatedSearchTerm = 'updated searchTerm'

  beforeEach(() => {
    wrapper = shallow(<SearchBar {...props} />)
  })

  it('should render the <SearchBar /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should update the value when the searchTerm prop changes', () => {
    expect(wrapper.find('.search-input').props().value).toEqual(props.searchTerm)
    wrapper.setProps({searchTerm: updatedSearchTerm})
    expect(wrapper.find('.search-input').props().value).toEqual(updatedSearchTerm)
  })

  it('should call the search handler', () => {
    wrapper.find('.search-input').simulate('change')
    expect(spy).toHaveBeenCalled()
  })
})
