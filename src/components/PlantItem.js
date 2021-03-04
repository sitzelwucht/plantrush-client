import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class PlantItem extends Component {
    
    render() {
        return (
            <div className="list-item">
               <h5>{this.props.name}</h5> 
               <div className="item-row">
                        <div><img src="https://picsum.photos/200" alt=""/></div>
                        <div className="factfile">
                            <div><span>Species:</span>{this.props.name}</div>
                            <div><span>Light:</span> {this.props.light}</div>
                            <div><span>Watering:</span> {this.props.watering}</div>
                            <div>{this.props.description}</div>
                            <Button variant="light">more</Button>
                        </div>
                        
               </div>

            </div>
        )
    }
}
