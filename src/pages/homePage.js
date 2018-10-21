import React, { Component } from 'react'
class homePage extends Component {
    render() {
        return (
            <div className = "homePage">
            <h1 className="hpHead">Home Page</h1>
                <div className= "ant-skeleton-content">
                    <h2>About us:</h2>
                    <div className="ant-skeleton-paragraph">
                    </div>
                </div>
            </div>
        )
    }
}
export default homePage;