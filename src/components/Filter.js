import React, {Component} from 'react'

export default class Filter extends Component{

    handleChange = (e) => {
        this.props.changeFilterTerm(e.target.value)
    }

    render() {
        return(
            <input 
                type='text'
                name='filter'
                placeholder='TUNNEL SNAKES RULES'
                value={this.props.filterTerm}
                onChange={this.handleChange}
            />
        )
    }
}