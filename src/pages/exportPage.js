import React, { Component } from 'react'
import {DatePicker,Button, Radio, Icon} from 'antd';
import '../export.js';

const{MonthPicker,RangePicker,WeekPicker} = DatePicker;

function getDate(){

    RangePicker.valueOf()

}
class exportPage extends Component {
    render() {
        return (
            <div>
                <RangePicker onChange={getDate} />
                <Button type="primary" onClick={''}>Export to .CSV</Button>
            </div>
        )
    }
}

export default exportPage