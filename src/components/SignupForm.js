import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class SignupForm extends Component {
    render() {
        return (
            <div>
            <h3>Sign up</h3>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password2" type="password" placeholder="Password" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Sign up
            </Button>
            </Form>
            </div>
        )
    }
}
