/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import Moment from 'moment';
import { Button } from 'react-bootstrap'
import EditPostForm from './EditPostForm'

class PostDetail extends Component {


    state = {
        post: {},
        showForm: false,
        loading: true,
    }


    handleDelete = () => {
        axios.delete(`${config.API_URL}/api/myposts/${this.props.postid}`)
        .then(() => {
            this.props.history.push('/mypage')
        })
        .catch(err => console.log(err))
    }


    handleShowForm = () => {
        this.setState({
            showForm: true
        })
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/api/myposts/${this.props.postid}`)
        .then(response => {
            this.setState({
                post: response.data,
            })
        })
        .catch(err => console.log(err))
        
      }
  

    render() {

        const { post, showForm } = this.state

        Moment.locale('en');
        return (
            <div className="detail-box">
                <div className="detail-header">
                    <div>{post.title} </div>
                    <div className="btns">
                        <Button variant="light" onClick={this.handleShowForm}>edit</Button>
                        <Button variant="light" onClick={this.handleDelete}>delete</Button>
                    </div>
           
                </div>
                { showForm && <EditPostForm postid={post._id} /> } 
                <div className="posted">{Moment(post.created).format('dddd DD MMM yyyy')} </div>
                { post.imageurl && <img src={post.imageurl} height="300" alt="" /> } 
                <p>{post.content}</p>
            </div>
        )
    }
}


export default withRouter(PostDetail)