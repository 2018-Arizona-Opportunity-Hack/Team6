import React, { Component } from 'react'
import Firebase from './Firebase.js'
import Button from 'antd/lib/button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Firebase />
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
