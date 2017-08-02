/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should render the <Header /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
