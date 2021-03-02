import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';

export default class Landing extends Component {
    render() {
        return (

        <div className="landing">
            <div className="intro">


            <h2><img src="/images/noun_Plant_9393.svg" alt="" /><span className="darkgreen light">plant</span><span>rush</span></h2>
                <div className="intro-btns">
    
                <div className="mb-2">
                    <Button onClick={this.props.handleSignUpClick}variant="primary green" size="lg">
                    Sign Up
                    </Button>

                    <Button onClick={this.props.handleLoginClick}variant="secondary darkgreen" size="lg">
                    Log In
                    </Button>
                </div>
                <LoginForm />

                </div>

            </div>
        </div>
        )
    }
}
