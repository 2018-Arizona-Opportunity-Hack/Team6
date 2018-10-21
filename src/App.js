import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import homePage from './pages/homePage.js'
import './App.css'
import NavBar from './navBar.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/home" component={homePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
