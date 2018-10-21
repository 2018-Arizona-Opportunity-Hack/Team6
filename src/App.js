import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './navBar.js'
import HomePage from '../src/pages/homePage.js'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

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
