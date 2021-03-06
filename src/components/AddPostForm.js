import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Image } from 'cloudinary-react'

export default class AddPostForm extends Component {





    state = {
        cloudinaryId: null,
        imageUrl: null
    }


    uploadImage = (files) => {
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', 'y7dfvtyb')
        axios.post('https://api.cloudinary.com/v1_1/plantrush/image/upload', formData)
        .then(response => {
            this.setState({ cloudinaryId: response.data.public_id, imageUrl: response.data.url})
        })
    }


    render() {
        return (
            <div>
            <Form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="content" as="textarea" rows={3} />
                </Form.Group>

                <Form.Control type="file" onChange={(e) => {this.uploadImage(e.target.files)}}/>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image url</Form.Label>
                    <Form.Control name="imageurl" type="text" value={this.state.imageUrl} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>


                <div className="plant-image">
                <Image style={{width: '450px'}} cloudName="plantrush" publicId={this.state.cloudinaryId}/>
                </div>
            </div>
        )
    }
}
