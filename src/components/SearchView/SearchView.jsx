import React, { Component } from 'react'
import { debounce } from 'throttle-debounce'

import SearchBar from '../SearchBar/SearchBar'
import ItemCard from '../ItemCard/ItemCard'

import { searchMovies, browseMovies } from '../../api/api'
import { imageBasePath } from '../../config'

import './search-view.css'

class SearchView extends Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      searchTerm: '',
      pageNumber: 1,
      totalResults: 0,
      totalPages: 0,
      searchSuccess: true
    }

    this.browseMovies = this.browseMovies.bind(this)
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  browseMovies () {
    browseMovies().then(response => {
      this.setState({
        movies: response.results,
        searchSuccess: response.results.length > 0
      })
    })
  }

  searchMovies () {
    const { searchTerm, pageNumber } = this.state
    searchMovies({searchTerm, pageNumber}).then(response => {
      this.setState({
        movies: response.results,
        totalResults: response.total_results,
        totalPages: response.total_pages,
        searchSuccess: response.results.length > 0
      })
    })
  }

  componentDidMount () {
    this.browseMovies()
  }

  updateSearchTerm (e) {
    this.setState({
      searchTerm: e.target.value,
      page: 1
    }, () => debounce(500, () => { this.searchMovies() })())
  }

  render () {
    return (
      <div className='search-view'>
        <SearchBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
        <div className='items'>
          {
            this.state.movies.length > 0 && this.state.movies.map(movie => {
              return (
                <ItemCard
                  image={`${imageBasePath}${movie.poster_path}`}
                  title={movie.title}
                  date={movie.release_date.split('-')[0]} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SearchView
