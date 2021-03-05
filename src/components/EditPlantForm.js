import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class EditPlantForm extends Component {


    render() {
        return (
            <div className="edit-form">EDIT
                <Form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />
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
            </div>
        )
    }
}
