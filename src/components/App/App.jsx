import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import SearchView from '../SearchView/SearchView'
import DetailView from '../DetailView/DetailView'

import './app.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <Router>
          <Switch>
            <Route path='/:movieId' exact component={DetailView} />
            <Route path='/' exact component={SearchView} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
