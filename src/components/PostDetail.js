/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import Moment from 'moment'
import { Button } from 'react-bootstrap'
import EditPostForm from './EditPostForm'
import CommentForm from './CommentForm'

class PostDetail extends Component {


    state = {
        post: {},
        showForm: false,
        isLoading: true,
        comments: [],
        showCommentForm: false,
        loggedInUser: null
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


    handleShowCommentForm = () => {
        this.setState({
            showCommentForm: true
        })
    }



    handleAddComment = (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let content = e.target.content.value
        let author = this.state.loggedInUser
        let authorName = this.state.loggedInUser.email
        let post = this.props.postid
        
    axios.post(`${config.API_URL}/api/add-comment`, {
        title: title,
        content: content,
        author: author,
        authorName: authorName,
        post: post
    })
    .then(response => {
        this.setState({
            comments: [response.data, ...this.state.comments],
            showCommentForm: false
        })
    })
}



    componentDidMount() {
        if (!this.state.loggedInUser) {
            axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
            .then((response) => {
                this.setState({
                    loggedInUser: response.data,
                    isLoading: false
                })
            })
                .catch(err => {
                    console.log(err)
                })
            }  

        axios.get(`${config.API_URL}/api/myposts/${this.props.postid}`)
        .then(response => {
            this.setState({
                post: response.data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))
        

        // fetch comments with the same post id
        axios.get(`${config.API_URL}/api/comments/${this.props.postid}`)
        .then((response) => {
            let sorted = response.data.sort((a, b) => {
                if (a.time < b.time) return 1
                else if (a.time > b.time) return -1
                else return 0
            }) 
            this.setState({ comments: sorted, isLoading: false })
            })
        .catch(() => {
            console.log('failed to fetch comments')
        })
    
      }
  




    render() {
  
        const { post, showForm, showCommentForm, comments, isLoading } = this.state
        const { user } = this.props

        if (!user) {
           return <div>Hello nobody there</div>
        }
   
        if (isLoading) {
            return <div>Loading...</div>
        }

        Moment.locale('en');
        return (    
            <section className="main-container">
            <div className="detail-box">
                <div className="detail-header">
                    <div>{post.title} </div>
                    
                  { post.author === user._id &&
                    <div className="btns">
                        <Button variant="light" onClick={this.handleShowForm}>edit</Button>
                        <Button variant="light" onClick={this.handleDelete}>delete</Button>
                    </div>
                  }
                  
           
                </div>

                { showForm && <EditPostForm postid={post._id} /> } 

                <div className="posted">  <div><img src="/images/user1.svg" height="20" alt="" />{post.authorName}</div> {Moment(post.created).format('dddd DD MMM yyyy')} </div>
                { post.imageurl && <img src={post.imageurl} height="300" alt="" /> } 
                <p>{post.content}</p>
            

            <div className="comment-section">


                <div className="comments"> 
                    { comments.length === 1 ? <div>{comments.length} comment</div> : <div>{comments.length} comments</div>} 
                </div>

               <div>
                    { showCommentForm ?  <CommentForm onAdd={this.handleAddComment}/> : <Button variant="info" onClick={this.handleShowCommentForm}>Add comment</Button> } 
               </div> 
            
              
              {
                comments.map((item, i) => {
                    return <div key={i} className="comment-container"> 
                    <div className="comment-title">{item.title}</div> 
                    <div className="comment-time">{item.authorName}  on  {Moment(item.time).format('MMMM Do YYYY, h:mm:ss a')}</div> 
                    <div className="comment-content">{item.content} </div>
                    </div>
                })

              }
              </div>
            </div>
            </section>
        )
    }
}


export default withRouter(PostDetail)