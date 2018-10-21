import React, { Component } from 'react'
import { Icon, Card } from 'antd'
import { Form, Input, Checkbox, Button, AutoComplete } from 'antd';

class event extends Component {
    state={
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    }

    render() {
        let { id, events, email, phone, firstName, lastName, categories}= this.props;
        /*i
        if (this.state.editmode)
        {
            then do the same thing but with tex
        }
        */

        return(
            <Card>
                <p>{firstName + ' ' + lastName}</p>
                <Input type="text" value={firstName} prefix={<Icon type ="user" theme="outlined"/>}/>
                <Input type="text" value={lastName} prefix={<Icon type="user"theme="outlined"/>}/>
                <Input type="text" value={phone}prefix={<Icon type ="phone" theme="outlined"/>}/>
                <Input type="text" value={email}prefix={<Icon type="mail" theme="outlined"/>}/>
                <Button type="primary" icon="check">Save</Button>
            </Card>
         );

        return (
            <Card title= "Volunteer">
                {/* replace with username */}
                <p>{firstName + ' ' + lastName}</p>
                <p>
                    <Icon type="user" theme="outlined" /> {firstName} {lastName}
                </p>
                <p>
                    <Icon type="phone" theme="outlined" /> {phone} Phone #
                </p>
                <p>
                    <Icon type="mail" theme="outlined" /> {email} Email
                </p>
                <Button type="primary" icon="edit">Edit</Button>
            </Card>
        )
    }
}

export default event