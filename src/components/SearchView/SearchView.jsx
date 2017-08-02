import React, { Component } from 'react'
import queryString from 'query-string'

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
      isSearch: false
    }

    this.browseMovies = this.browseMovies.bind(this)
  }

  browseMovies () {
    browseMovies().then(response => {
      this.setState({
        movies: response.results
      })
    })
  }

  searchMovies () {
    const { searchTerm, pageNumber } = this.state
    searchMovies({searchTerm, pageNumber})
  }

  componentDidMount () {
    // If there's a searchTerm in the URL, it means we've gone back from the detail view
    // and therefore we should restore the state the user previously had in their search results
    const queryParams = queryString.parse(this.props.location.search)
    const queryParamKeys = Object.keys(queryParams)
    if (queryParamKeys.length > 0 && queryParamKeys.includes('searchTerm')) {
      this.setState({
        searchTerm: queryParams.searchTerm,
        page: queryParams.page || 1,
        isSearch: true
      }, this.searchMovies)
    } else {
      this.browseMovies()
    }
  }

  render () {
    return (
      <div className='search-view'>
        <SearchBar />
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
