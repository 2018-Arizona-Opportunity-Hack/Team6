import React, { Component } from 'react'
import {Icon, Card, Button} from 'antd'

class event extends Component {
  render() {
    let {description, name, location, hours, needed } = this.props;
    return (
      <Card title={name}>
        <p>{description}</p>
        <p>
          <Icon type="environment" theme="outlined" /> {location}
        </p>
        <p>
          <Icon type="clock-circle" theme="outlined" /> {hours} Hours
        </p>
        <p>
          <Icon type="team" theme="outlined" /> {needed} Volunteers Needed
        </p>
          <Button type="primary" ghost>Join event</Button>
      </Card>
    )
  }
}

export default event
