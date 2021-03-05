import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PlantItem extends Component {
    
    render() {
        return (
            <div className="list-item">
              <Link to={`/plant/${this.props.id}`}><h5>{this.props.name}</h5> </Link>
               <div className="item-row">
                        <div><img src="https://picsum.photos/200" alt=""/></div>
                        <div className="factfile">
                            <div><span>Species:</span>{this.props.name}</div>
                            <div><span>Light:</span> {this.props.light}</div>
                            <div><span>Watering:</span> {this.props.watering}</div>
                            <div>{this.props.description}</div>
                            <Link to={`/plant/${this.props.id}`}><Button variant="light">more</Button></Link>
                        </div>
                        
               </div>

            </div>
        )
    }
}
