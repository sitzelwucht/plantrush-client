import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import AddPostForm from './AddPostForm'
import PostItem from './PostItem'
import axios from 'axios'
import config from '../config'

export default class MyPostsList extends Component {


    state = {
        posts: [],
        showForm: false
    }

    handleAddPost = (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let content = e.target.content.value
        let imageurl = e.target.imageurl.value

    axios.post(`${config.API_URL}/api/create-post`, {
        title: title,
        content: content,
        imageurl: imageurl
    })
    .then(response => {
        console.log(response.data)
        this.setState({
            posts: [response.data, ...this.state.posts],
            showForm: false
        })
    })
}

    handleShowForm = () => {
        this.setState({
            showForm: true
        })
    }

componentDidMount(){

    axios.get(`${config.API_URL}/api/myposts`)
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch(() => {
        console.log('failed to fetch posts')
      })

    if (!this.state.loggedInUser) {
      axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }  
  }


    render() {

        const { posts, showForm } = this.state
        return (
                
            <div className="posts">

                <div className="sub-header">
                {
                    showForm ? <AddPostForm onAdd={this.handleAddPost} / > : <Button onClick={this.handleShowForm}>Add Post</Button>

                }

                </div>
                {
                    posts.map((item, i) => {
                        return <PostItem 
                        id={item._id}
                        title={item.title}
                        content={item.content}
                        imageurl={item.imageurl} />
                    })

                }
            </div>
     
        )
    }
}
