import React, { Component } from 'react'
import { debounce } from 'throttle-debounce'

import SearchBar from '../SearchBar/SearchBar'
import ItemCard from '../ItemCard/ItemCard'
import Modal from '../Modal/Modal'
import DetailView from '../DetailView/DetailView'

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
      searchSuccess: true,
      selectedMovie: null
    }

    this.browseMovies = this.browseMovies.bind(this)
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
    this.clearSelectedMovie = this.clearSelectedMovie.bind(this)
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
        searchSuccess: response.results.length > 0,
        apiError: false
      })
    })
    .catch(error => {
      console.warn(error)
      this.setState({
        apiError: true
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
    }, () => debounce(500, () => {
      if (this.state.searchTerm.length > 0) {
        this.searchMovies()
      } else {
        this.browseMovies()
      }
    })())
  }

  selectMovie (movie) {
    this.setState({
      selectedMovie: movie
    })
  }

  clearSelectedMovie () {
    console.log('called')
    this.setState({
      selectedMovie: null
    })
  }

  render () {
    return (
      <div className='search-view'>
        <SearchBar searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
        {
          !this.state.searchTerm.length && (
            <span className='upcoming-movies-title'>
              Not sure what to search for? Here are the most popular recent movies to get you started!
            </span>
          )
        }
        <div className='items'>
          {
            this.state.movies.length > 0 && this.state.movies.map(movie => {
              return (
                <ItemCard
                  key={movie.id}
                  image={`${imageBasePath}${movie.poster_path}`}
                  title={movie.title}
                  date={movie.release_date.split('-')[0]}
                  item={movie}
                  onSelect={this.selectMovie} />
              )
            })
          }

          {/* Add some spacer cards if necessary to ensure last row cards are correct size  */}
          { this.state.movies.length % 4 > 0 && <div className='item' /> }
          { this.state.movies.length % 4 > 1 && <div className='item' /> }
          { this.state.movies.length % 4 > 2 && <div className='item' /> }
        </div>
        {
          this.state.selectedMovie && (
            <Modal clearSelectedItem={this.clearSelectedMovie}>
              <DetailView
                title={this.state.selectedMovie.title}
                overview={this.state.selectedMovie.overview}
                image={`${imageBasePath}${this.state.selectedMovie.poster_path}`}
                date={this.state.selectedMovie.release_date.split('-')[0]} />
            </Modal>
          )
        }
      </div>
    )
  }
}

export default SearchView
