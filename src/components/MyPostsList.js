import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
import AddPostForm from './AddPostForm'
import PostItem from './PostItem'
import axios from 'axios'
import config from '../config'


export default class MyPostsList extends Component {


    state = {
        posts: [],
    }

    handleAddPost = (e) => {
        e.preventDefault()
        let title = e.target.title.value
        let content = e.target.content.value

    axios.post(`${config.API_URL}/api/create-post`, {
        title: title,
        content: content,
    })
    .then(response => {
        console.log(response.data)
        this.setState({
            posts: [response.data, ...this.state.posts]
        })
    })
}



componentDidMount(){

    axios.get(`${config.API_URL}/api/myposts`)
      .then((response) => {
        console.log(response.data)
        this.setState({ posts: response.data})
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

        const { posts } = this.state
        return (
                
            <div className="posts">
                <div className="sub-header">
                <ModalComponent 
                            btnTitle="add post" 
                            btnStyle="primary green" 
                            modalHeading="Add Post"
                            modalBody={<AddPostForm onAdd={this.handleAddPost}/>}    
                />
                </div>
            
                {
                    posts.map((item, i) => {
                        return <PostItem 
                        title={item.title}
                        content={item.content} />
                    })

                }
                <div className="posts">
                    <PostItem title="hello" description="this is a post" />
         
                </div>
            </div>
     
        )
    }
}
