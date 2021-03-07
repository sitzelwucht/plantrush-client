import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div style={{
                marginLeft: '750px', 
                marginTop: '200px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                width: '500px'
                }} >
                <img src="/images/map.svg" height="400" alt="" />
                <h1 style={{fontFamily: 'Comfortaa'}}>page not found</h1>
            </div>
        )
    }
}
