import React, { Component } from 'react'
import { Icon, Card } from 'antd'
import { Input, Button } from 'antd'

class event extends Component {
  state = {
    edit: false,
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  };


  render() {
    let { email, phone, firstName, lastName } = this.state
    if (this.state.edit) {
      return (
        <Card onChange={this.handleInputChange}>
          <Input type="text" value={firstName} data-name="firstName" prefix={<Icon type="user" theme="outlined" />} />
          <Input type="text" value={lastName} data-name="lastName" prefix={<Icon type="user" theme="outlined" />} />
          <Input type="text" value={phone} data-name="phone" prefix={<Icon type="phone" theme="outlined" />} />
          <Input
            type="text"
            value={email}
            data-name="email"
            onChange={this.handleInputChange}
            prefix={<Icon type="mail" theme="outlined" />}
          />
          <Button type="primary" icon="check" onClick={() => this.setState({ edit: false })}>
            Save
          </Button>
        </Card>
      )
    } else {
      return (
        <Card title="Volunteer">
          {/* replace with username */}
          <p>{firstName + ' ' + lastName}</p>
          <p>
            <Icon type="user" theme="outlined" /> {firstName} {lastName}
          </p>
          <p>
            <Icon type="phone" theme="outlined" /> Phone # {phone}
          </p>
          <p>
            <Icon type="mail" theme="outlined" /> Email {email}
          </p>
          <Button type="primary" icon="edit" onClick={() => this.setState({ edit: true })}>
            Edit
          </Button>
        </Card>
      )
    }
  }
}

export default event
