import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddPostForm extends Component {




    render() {
        return (
            <div><h4>write comment</h4>
            <Form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="content" as="textarea" rows={3} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>

            </div>
        )
    }
}
