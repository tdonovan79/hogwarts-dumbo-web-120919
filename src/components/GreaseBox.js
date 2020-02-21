import React, { Component } from 'react'

export default class GreaseBox extends Component {

    handleChange = (e) => {
        // this.props.changeGreaseStatus(e.target.value)
        // console.log(e.target.value) = "on" ?  :
    }

    render() {
        return (
            <div>
                <input
                    type='checkbox'
                    name='greaseBox'
                    onChange={this.handleChange}
                    value="greasy"
                />
                <label for="greaseBox">Make it GREASY</label>
            </div>
        )
    }
}