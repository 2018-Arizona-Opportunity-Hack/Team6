import React, { Component } from 'react'
import { Icon, Card } from 'antd'

class event extends Component {
  render() {
    let { id, categories, volunteers, name, time, location, description, hours, needed } = this.props
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
      </Card>
    )
  }
}

export default event
