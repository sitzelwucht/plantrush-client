import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

export default class SearchPlants extends Component {
    render() {
        return (
            <div className="searchbar">
            
            <h1>search plants</h1>
                 <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            </div>
        )
    }
}
