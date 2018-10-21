import React, { Component } from 'react'
import Volunteer from '../components/volunteer.js'

let volunteerObject = {
    id:1,
    event: [],
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
        <h1>Volunteer page goes here</h1>
        <Volunteer id={volunteerObject.id} event={volunteerObject.event} email = {volunteerObject.email}
                   phone = {volunteerObject.phone} f_name={volunteerObject.f_name}
                   l_name = {volunteerObject.l_name} categories = {volunteerObject.categories}/>
      </div>
    )
  }
}

export default volunteerPage
