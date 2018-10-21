import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout

class navBar extends Component {
  render() {
    return (
      <Layout className="layout">
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
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}
export default navBar
