import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddPostForm extends Component {
    render() {
        return (
            <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
