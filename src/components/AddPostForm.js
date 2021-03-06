import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import Loader from './Loader'

export default class AddPostForm extends Component {


    state = {
        cloudinaryId: null,
        imageUrl: null,
        isLoading: null
    }


    uploadImage = (files) => {
        this.setState({isLoading: true})
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', 'y7dfvtyb')
        axios.post('https://api.cloudinary.com/v1_1/plantrush/image/upload', formData)
        .then(response => {
            this.setState({ 
                cloudinaryId: response.data.public_id, 
                imageUrl: response.data.url,
                isLoading: false
            })
        })
    }


    render() {
        const { isLoading, imageUrl, cloudinaryId } = this.state

        return (
            <div className="form-img">
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
                        <Form.Control name="imageurl" type="text" value={imageUrl} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                    </Form>


            <div className="plant-image">

            { !isLoading ? <Image style={{height: '450px'}} cloudName="plantrush" publicId={cloudinaryId}/> : <Loader />} 
               
                </div>
            
            </div>
        )
    }
}
