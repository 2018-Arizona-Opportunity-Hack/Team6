import React, { Component } from 'react'
import Event from '../components/event.js'
import { Row, Col, Button } from 'antd'
import api from '../api.js'
api();

let events = window.api.events.getEvents('',null,null);
let eventComponents = events.map((val,i,arr) =>  {

 return(
     <Event
         id={val.id}
         categories={val.categories}
         volunteers={val.volunteers}
         name={val.name}
         time={val.time}
         location={val.location}
         description={val.description}
         hours={val.hours_needed}
     />
 )
});

class eventPage extends Component {
  render() {
    return (
      <div>
        <h1>Events go here</h1>
        <Row gutter={16}>
          <Col span={8}>
              {eventComponents }

          </Col>
        </Row>
      </div>
    )}
}

export default eventPage
