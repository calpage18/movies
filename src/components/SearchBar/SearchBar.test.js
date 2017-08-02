/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './SearchBar'

describe('<SearchBar /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchBar />)
  })

  it('should render the <SearchBar /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
