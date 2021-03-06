import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'

export default class EditPostForm extends Component {


    state = {
        post: {}
    }

    componentDidMount() {
     
        axios.get(`${config.API_URL}/api/myposts/${this.props.postid}`)
        .then(response => {
            this.setState({
                post: response.data
            })
        })
        .catch(() => {console.log('failed to fetch post')})
    }

    

    handleTitleChange = (e) => {
       let newTitle = e.target.value
       let clonePost = JSON.parse(JSON.stringify(this.state.post))
       clonePost.title = newTitle

       this.setState({
           post: clonePost
       })

    }

    handleContentChange = (e) => {
        let newcontent = e.target.value
        let clonePost = JSON.parse(JSON.stringify(this.state.post))
        clonePost.content = newcontent

        this.setState({
            post: clonePost
        })
    }

    handleEditPost = (post) => {
        axios.patch(`${config.API_URL}/api/myposts/${this.props.postid}`, {
            title: post.title,
            content: post.content
        })
        .then(() => this.props.history.push('/mypage'))
    }

    render() {

        const { post } = this.state

        return (
            <div className="edit-form">
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" onChange={this.handleTitleChange} value={post.title} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="content" as="textarea" rows={3} onChange={this.handleContentChange} value={post.content}/>
                </Form.Group>

                <Button onClick={() => this.handleEditPost(post)} variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
