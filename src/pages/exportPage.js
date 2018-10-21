import React, { Component } from 'react'
import { Form, Row,RangePicker, Button, DatePicker, Radio, Icon} from 'antd';
import '../src/export.js';

class exportPage extends Component {
    render() {
        return (
            <div>
                <RangePicker onChange={onChange} />
                <Button type="primary" onClick={exportCSV}>Export to .CSV</Button>
            </div>
        )
    }
}

export default exportPage