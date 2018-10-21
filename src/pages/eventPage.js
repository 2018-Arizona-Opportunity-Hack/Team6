import React, { Component } from 'react'
import Event from '../components/event.js'
import { Row, Col } from 'antd'
import api from '../api.js'

let eventObj = {
  id: 1,
  categories: [],
  notifications: [],
  volunteers: {},
  name: 'Hackathon',
  time: new Date(),
  location: 'Tempe',
  description: 'This is a 24 hour marathon of pain',
  hours: 24,
  needed: 200
}


class eventPage extends Component {
  render() {
    return (
      <div>
        <h1>Events go here</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Event
              id={eventObj.id}
              categories={eventObj.categories}
              volunteers={eventObj.volunteers}
              name={eventObj.name}
              time={eventObj.time}
              location={eventObj.location}
              description={eventObj.description}
              hours={eventObj.hours}
              needed={eventObj.needed}
            />
          </Col>
          <Col span={8}>
            <Event
              id={eventObj.id + ' 2'}
              categories={eventObj.categories + ' 2'}
              volunteers={eventObj.volunteers + ' 2'}
              name={eventObj.name + ' 2'}
              time={eventObj.time + ' 2'}
              location={eventObj.location + ' 2'}
              description={eventObj.description + ' 2'}
              hours={eventObj.hours + ' 2'}
              needed={eventObj.needed + ' 2'}
            />
          </Col>
          <Col span={8}>
            <Event
              id={eventObj.id + ' 3'}
              categories={eventObj.categories + ' 3'}
              volunteers={eventObj.volunteers + ' 3'}
              name={eventObj.name + ' 3'}
              time={eventObj.time + ' 3'}
              location={eventObj.location + ' 3'}
              description={eventObj.description + ' 3'}
              hours={eventObj.hours + ' 3'}
              needed={eventObj.needed + ' 3'}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default eventPage
