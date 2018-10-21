import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, {Component} from 'react';
import FormItem from "antd/es/form/FormItem";

class loginPage extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        };


        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({error: ''});
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({error: 'Username is required'});
        }
        else{
            var password = this.state.password;
            var username = this.state.username;
            console.log(window.api.auth.logIn(username,password));
            this.props.history.push('/homePage.js');
        }
        if (!this.state.password) {
            return this.setState({error: 'Password is required'});
        }
        return this.setState({error: ''});
    }

    handleUserChange(evt){
        this.setState({
           username: evt.target.value,
        });
    };
    handlePassChange(evt){
        this.setState({
            password: evt.target.value,
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                {
                    this.state.error && <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>X</button>
                        {this.state.error}
                    </h3>
                }
                <h1>Login</h1>
                <FormItem>
                        <Input id = 'uname' placeHolder="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.username}  onChange={this.handleUserChange}/>
                </FormItem>
                <FormItem>
                        <Input id = 'password' placeholder="Password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" value={this.state.password} onChange={this.handlePassChange}/>
                </FormItem>
                <FormItem>
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