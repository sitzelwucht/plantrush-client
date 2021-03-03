import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export default class LoginForm extends Component {
    render() {
        return (
            <div>
        <Form onSubmit={this.props.onLogin}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary green" type="submit">
                Log in
            </Button>
            </Form>
            </div>
        )
    }
}
