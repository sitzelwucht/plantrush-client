import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PlantItem extends Component {
    
    render() {
        return (
            <div className="list-item">
              <Link to={`/plant/${this.props.id}`}><h5>{this.props.name}</h5> </Link>
               <div className="item-row">
                        <div>{this.props.imageurl && <img src={this.props.imageurl} height="75" alt=""/>}</div>
                        <div className="factfile">
                            <div>{this.props.description.slice(0, 75)}...</div>
                            <Link to={`/plant/${this.props.id}`}><Button className="read-more-btn" variant="light">more</Button></Link>
                        </div>
                        
               </div>

            </div>
        )
    }
}
