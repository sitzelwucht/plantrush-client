import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddPlantForm extends Component {
    render() {
        return (
            <div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Watering</Form.Label>
                    <Form.Control as="select">
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Light</Form.Label>
                    <Form.Control as="select">
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </Form.Control>
                </Form.Group>


                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
