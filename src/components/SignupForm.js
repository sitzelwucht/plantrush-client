import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class SignupForm extends Component {
    render() {
        return (
            <div>
            <Form onSubmit={this.props.onSignup}>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                Password must be minimum 6 characters long and contain at least 1 numeric character
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password2" type="password" placeholder="Password" />
            </Form.Group>


            <Button variant="primary darkgreen" type="submit">
                Sign up
            </Button>
            </Form>
            </div>
        )
    }
}
