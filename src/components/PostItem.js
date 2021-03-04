import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class PostItem extends Component {
    
    render() {
        return (
            <div className="list-item">
               <h5>{this.props.title}</h5> 
               <div className="item-row">
                        <div><img src="https://picsum.photos/200" alt=""/></div>
                        <div className="factfile">
                            <div>{this.props.content}</div>
                            <Button variant="light">more</Button>
                        </div>
                        
               </div>

            </div>
        )
    }
}
