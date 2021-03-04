import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ListItem extends Component {
    
    render() {
        return (
            <div className="list-item">
               <h5>header</h5> 
               <div className="item-row">
                        <div><img src="http://placekitten.com/200/200" alt=""/></div>
                        <div className="factfile">
                            <div><span>Species:</span> haworthia</div>
                            <div><span>Light:</span> medium</div>
                            <div><span>Watering:</span> low</div>
                            <div>Some other info</div>
                            <Button variant="light">more</Button>
                        </div>
                        
               </div>

            </div>
        )
    }
}
