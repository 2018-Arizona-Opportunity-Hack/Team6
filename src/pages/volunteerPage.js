import React, { Component } from 'react'
import Volunteer from '../components/volunteer.js'
import {Col, Row} from "antd";
import { Card } from "antd";
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

let volunteerObj = {
    id:1,
    events: [],
    email: 'www.stuff.com',
    phone: '623-612-2349',
    f_name: 'Bob',
    l_name: 'TheBuilder',
    categories: []
};

class volunteerPage extends Component {
  render() {
    return (
        <div>
            <h1>Volunteers go here</h1>
            <Col gutter={16}>
                <Row span={8}>
                    <Volunteer
                        id={volunteerObj.id}
                        events={volunteerObj.events}
                        email={volunteerObj.email}
                        phone={volunteerObj.phone}
                        firstName={volunteerObj.f_name}
                        lastName={volunteerObj.l_name}
                        categories={volunteerObj.categories}
                    />
                </Row>
                <Row span={8}>
                    <Volunteer
                        id={volunteerObj.id + ' 2'}
                        events={volunteerObj.events + ' 2'}
                        email={volunteerObj.email + ' 2'}
                        phone={volunteerObj.phone + ' 2'}
                        firstName={volunteerObj.f_name+ ' 2'}
                        lastName={volunteerObj.l_name + ' 2'}
                        categories={volunteerObj.categories + ' 2'}
                    />
                </Row>
                <Row span={8}>
                    <Volunteer
                        id={volunteerObj.id + ' 3'}
                        events={volunteerObj.events + ' 3'}
                        email={volunteerObj.email + ' 3'}
                        phone={volunteerObj.phone + ' 3'}
                        firstName={volunteerObj.f_name + ' 3'}
                        lastName={volunteerObj.l_name + ' 3'}
                        categories={volunteerObj.categories + ' 3'}
                    />
                </Row>
            </Col>
        </div>
    )
  }
}

export default volunteerPage
