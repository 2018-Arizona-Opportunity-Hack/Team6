import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './navBar.js'
import HomePage from '../src/pages/homePage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/home" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
