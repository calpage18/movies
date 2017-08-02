/* global describe, beforeEach it, expect, jest */
import React from 'react'
import { shallow } from 'enzyme'

import ItemCard from './ItemCard'

const spy = jest.fn()
const cardProps = {
  title: 'The Departed',
  date: '2006',
  image: 'test image url',
  onSelect: spy
}

describe('<ItemCard /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ItemCard {...cardProps} />)
  })

  it('should render the <ItemCard /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render a title', () => {
    expect(wrapper.find('.item__title')).toHaveLength(1)
    expect(wrapper.find('.item__title').text()).toEqual(cardProps.title)
  })

  it('should render a year', () => {
    expect(wrapper.find('.item__date')).toHaveLength(1)
    expect(wrapper.find('.item__date').text()).toEqual(cardProps.date)
  })

  it('should render an image', () => {
    const image = wrapper.find('.item__image')
    expect(image).toHaveLength(1)
    expect(image.type()).toEqual('img')
    expect(image.prop('src')).toEqual(cardProps.image)
  })

  it('should call the click handler', () => {
    wrapper.find('.item').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
