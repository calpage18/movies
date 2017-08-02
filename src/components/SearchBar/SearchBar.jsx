import React from 'react'

import './search-bar.css'

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <form className='search-form'>
        <input type='search' className='search-input' value={props.searchTerm} onChange={props.updateSearchTerm} />
      </form>
    </div>
  )
}

export default SearchBar
