import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios' 
import config from '../config'

export default class PostItem extends Component {
    
    state = {
        comments: []
    }

    
    componentDidMount() {
        axios.get(`${config.API_URL}/api/comments/${this.props.id}`)
        .then((response) => {
            this.setState({ comments: response.data, isLoading: false })
            })
        .catch(() => {
            console.log('failed to fetch comments')
        })
    
    }


    render() {

        const { comments } = this.state

        return (

            <div className="list-item">

               <Link to={`/post/${this.props.id}`}>
                <h5>{this.props.title}  <span className="post-author"><img src="images/user1.svg" height="20" alt="" />{this.props.author}</span></h5> 
               </Link>

               <div className="item-row">
                    <div><img src={this.props.imageurl} height="85" alt=""/></div>
                    <div className="preview">{this.props.content.slice(0, 200)}...</div>
                </div>
                    
                <Link to={`/post/${this.props.id}`}>
                <div className="small-link">
                { comments.length === 1 ? <div>{comments.length} comment</div> : <div>{comments.length} comments</div> }
                    </div>
                </Link>  
              
            </div>
        
        )
    }
}
