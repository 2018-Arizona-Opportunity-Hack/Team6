import React, { Component } from 'react'
import Firebase from './Firebase.js'
import './App.css'
import NavBar from './navBar.js'
import HomePage from '../src/pages/homePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomePage/>
      </div>
    )
  }
}

export default App
