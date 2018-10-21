import React, { Component } from 'react';
import logo from './test-folder/logo.svg';
import './App.css';
import api from './api.js';

api();

class App extends Component {


  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping list for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default App;
