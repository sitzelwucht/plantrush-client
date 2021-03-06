import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

export default class Loader extends Component {
    render() {
        return (
            <div>
                  <Spinner className="spinner" animation="grow" variant="dark" />
            </div>
        )
    }
}
