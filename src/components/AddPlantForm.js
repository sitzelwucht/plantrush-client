import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Image } from 'cloudinary-react'



export default class AddPlantForm extends Component {


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
            <div className="row">
                <Form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Control type="file" onChange={(e) => {this.uploadImage(e.target.files)}}/>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image url</Form.Label>
                    <Form.Control name="imageurl" type="text" value={this.state.imageUrl} />
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
                <Image style={{width: '450px'}} cloudName="plantrush" publicId={this.state.cloudinaryId}/>
                </div>
            </div>
        )
    }
}
