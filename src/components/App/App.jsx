import React, { Component } from 'react'

import Header from '../Header/Header'
import SearchView from '../SearchView/SearchView'

import './app.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <SearchView />
      </div>
    )
  }
}

export default App
