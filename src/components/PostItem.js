import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default class PostItem extends Component {
    

    render() {

        return (
            <div className="list-item">
               <Link to={`/post/${this.props.id}`}><h5>{this.props.title}</h5> </Link>
               <div className="item-row">
                        <div><img src={this.props.imageurl} alt=""/></div>
                        <div className="factfile">
                            <div>{this.props.content}</div>
                            by {this.props.author}
                       <Link to={`/post/${this.props.id}`}><Button variant="light">more</Button></Link>
                        </div>
                        
               </div>
   
            </div>
        
        )
    }
}
