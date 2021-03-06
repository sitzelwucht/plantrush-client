import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import Loader from './Loader'


export default class AddPlantForm extends Component {


    state = {
        cloudinaryId: null,
        imageUrl: null,
        isLoading: null
    }


    uploadImage = (files) => {
        this.setState({ isLoading: true })
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
            <div className="row">
                <Form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Control type="file" onChange={(e) => {this.uploadImage(e.target.files)}}/>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image url</Form.Label>
                    <Form.Control name="imageurl" type="text" value={imageUrl} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Watering</Form.Label>
                    <Form.Control name="watering" as="select">
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Light</Form.Label>
                    <Form.Control name="light" as="select">
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                    </Form.Control>
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
