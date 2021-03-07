import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class PostItem extends Component {
    

    render() {

        return (
            <div className="list-item">
               <Link to={`/post/${this.props.id}`}><h5>{this.props.title}  <span className="post-author"><img src="images/user1.svg" height="20" alt="" />{this.props.author}</span></h5> </Link>
               <div className="item-row">
                        <div><img src={this.props.imageurl} height="250" alt=""/></div>
                        <div className="factfile">
                           
                            <div>{this.props.content}</div>
                          
                       <div><Link to={`/post/${this.props.id}`}><Button variant="light" className="read-more-btn">more</Button></Link></div>
                        </div>
                        
               </div>
   
            </div>
        
        )
    }
}
