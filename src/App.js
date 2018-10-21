import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './navBar.js'
import HomePage from '../src/pages/homePage.js'
import EventPage from '../src/pages/eventPage'
import LoginPage from '../src/pages/loginPage.js'
import VolunteerPage from '../src/pages/volunteerPage.js'
import api from './api.js'
import { Layout } from 'antd'
const { Content, Footer } = Layout

api();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout className="layout">
            <NavBar />
            <Content style={{ padding: '0 50px' }}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/events" component={EventPage} />
                <Route path="/volunteers" component={VolunteerPage} />
                <Route path="/login" component={LoginPage
                } />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
