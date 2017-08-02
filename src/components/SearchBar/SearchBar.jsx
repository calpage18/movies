import React from 'react'

import './search-bar.css'

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <input type='search' placeholder='Search for movies...' className='search-input' value={props.searchTerm} onChange={props.updateSearchTerm} />
    </div>
  )
}

export default SearchBar
