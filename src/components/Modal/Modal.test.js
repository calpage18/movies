/* global describe, beforeEach it, expect, jest */
import React from 'react'
import { shallow } from 'enzyme'

import Modal from './Modal'

describe('<Modal /> tests', () => {
  let wrapper
  const spy = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Modal clearSelectedItem={spy} />)
  })

  it('should render the <Modal /> component', () => {
    expect(wrapper).toHaveLength(1)
    expect(wrapper.children()).toHaveLength(2)
  })

  it('should render an overlay', () => {
    expect(wrapper.find('.modal__overlay')).toHaveLength(1)
  })

  it('should call the handler on clicking overlay', () => {
    wrapper.find('.modal__overlay').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should render a modal body', () => {
    expect(wrapper.find('.modal__body')).toHaveLength(1)
  })

  it('should render an header', () => {
    expect(wrapper.find('.modal__header')).toHaveLength(1)
  })

  it('should render a back button', () => {
    expect(wrapper.find('.modal__close')).toHaveLength(1)
    expect(wrapper.find('.modal__close').text().toLowerCase()).toEqual('< back to search results')
  })

  it('should call the handler on clicking back button', () => {
    wrapper.find('.modal__close').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should render a modal content section', () => {
    expect(wrapper.find('.modal__content')).toHaveLength(1)
  })
})
