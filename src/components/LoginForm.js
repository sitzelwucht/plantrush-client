import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <h3>Log in</h3>
                <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log in
            </Button>
            </Form>
            </div>
        )
    }
}
