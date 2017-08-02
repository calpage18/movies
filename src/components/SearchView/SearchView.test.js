/* global describe, beforeEach it, expect */
import React from 'react'
import { shallow } from 'enzyme'

import SearchView from './SearchView'

const testMovies = []
for (let i = 0; i < 10; i++) {
  testMovies.push({
    title: `title ${i}`,
    id: i,
    release_date: '2017-1-1',
    poster_path: 'url/path'
  })
}

describe('<SearchView /> tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchView />)
  })

  it('should render the <SearchView /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  // it('should render the correct number of results', () => {
  //   wrapper.setState({movies: testMovies})
  //   console.log(wrapper.state)
  //   expect(wrapper.find('.item')).toHaveLength(testMovies.length)
  // })
})
