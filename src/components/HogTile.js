import React, { Component } from 'react'

export default class HogTile extends Component {
    state = {
        showDetails: false
    }

    handleHogClick = () => {
        this.setState(prevState => {
            return {
                showDetails: !prevState.showDetails
            }
        })
    }


    render() {
        let { name, specialty, greased, weight } = this.props.hog
        let highMedal = this.props.hog['highest medal achieved']
        return (
            <div className="pigTile" onClick={this.handleHogClick}>
                <h1>{name}</h1>
                <img src={require(`../hog-imgs/${name.split(' ').join('_').toLowerCase()}.jpg`)} />
                {
                    this.state.showDetails ?
                        <ul>
                            <li>{specialty}</li>
                            <li>{greased ? 'greased' : 'not greased'}</li>
                            <li>{weight}</li>
                            <li>{highMedal}</li>
                        </ul>
                        :
                        <ul></ul>
                }
            </div>
        )
    }
}