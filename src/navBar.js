import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
const { Header } = Layout

class navBar extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/volunteers">Volunteers</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}
export default navBar
