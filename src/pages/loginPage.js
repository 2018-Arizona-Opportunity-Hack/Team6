import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, {Component} from 'react';
import FormItem from "antd/es/form/FormItem";


class loginPage extends React.Component {

    constructor () {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        function login(username, password){
            return window.api.auth.logIn(username, password);
        }

    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h1>Login</h1>
                <FormItem>
                        <Input value='' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                        <Input value='' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                        <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(loginPage);


export default loginPage;