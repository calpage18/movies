/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('<App /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should render the <App /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
