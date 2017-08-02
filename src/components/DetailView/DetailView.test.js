/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import DetailView from './DetailView'

const viewProps = {
  title: 'The Departed',
  date: '2006',
  image: 'test image url',
  overview: 'test overview'
}

describe('<DetailView /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<DetailView {...viewProps} />)
  })

  it('should render the <DetailView /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render a title', () => {
    expect(wrapper.find('.detail-view__title')).toHaveLength(1)
    expect(wrapper.find('.detail-view__title').text()).toEqual(viewProps.title)
  })

  it('should render a year', () => {
    expect(wrapper.find('.detail-view__date')).toHaveLength(1)
    expect(wrapper.find('.detail-view__date').text()).toEqual(viewProps.date)
  })

  it('should render an overview', () => {
    expect(wrapper.find('.detail-view__overview')).toHaveLength(1)
    expect(wrapper.find('.detail-view__overview').text()).toEqual(viewProps.overview)
  })

  it('should render an image', () => {
    const image = wrapper.find('.detail-view__image')
    expect(image).toHaveLength(1)
    expect(image.type()).toEqual('img')
    expect(image.prop('src')).toEqual(viewProps.image)
  })
})
