import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        date: new Date()
    }

    updateClock = () => {
        this.setState({date: new Date()})
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateClock(),
            1000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }



    render() {
        const { date } = this.state
        
        return (
            <div>
                <div className="day">{date.toDateString()}</div>
                <div className="time">{date.toLocaleTimeString()}</div>
            </div>
    
        )
    }
}
