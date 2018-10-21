import React, { Component } from 'react'
import loadJS from 'loadjs'
import {Navbar, Nav,NavItem, MenuItem, NavDropdown} from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class navBar extends Component
{
render() {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Events</Menu.Item>
                    <Menu.Item key="3">Volunteers</Menu.Item>
                    <Menu.Item style={{justify  : 'right'}} key="4">Login</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    )
    
    }
}
export default navBar;