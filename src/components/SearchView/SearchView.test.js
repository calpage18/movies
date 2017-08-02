/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import SearchView from './SearchView'

describe('<SearchView /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchView />)
  })

  it('should render the <SearchView /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
