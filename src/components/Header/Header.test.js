/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import DetailView from './DetailView'

describe('<DetailView /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<DetailView />)
  })

  it('should render the <DetailView /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})
