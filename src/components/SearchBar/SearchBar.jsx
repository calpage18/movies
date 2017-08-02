import React from 'react'
import PropTypes from 'prop-types'

import './search-bar.css'

const SearchBar = ({ searchTerm, updateSearchTerm }) => {
  return (
    <div className='search-bar'>
      <input type='search' placeholder='Search for movies...' className='search-input' value={searchTerm} onChange={updateSearchTerm} />
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar
