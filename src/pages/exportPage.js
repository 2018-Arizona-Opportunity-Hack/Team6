import React, { Component } from 'react'
import {DatePicker,Button} from 'antd';
import '../export.js';

const{RangePicker} = DatePicker;

function getDate(){
    RangePicker.valueOf();
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