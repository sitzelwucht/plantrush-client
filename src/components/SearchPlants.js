import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'


export default class SearchPlants extends Component {

    state = {
        plants: [],
        results: [],
        msg: ''
    }
    


    handleSearch = (e) => {
      e.preventDefault()
      let queryStr = e.target.input.value
        axios.get(`${config.API_URL}/api/plant-search?input=${queryStr}`)
        .then(response => {
            this.setState({results: response.data})
        })
        .catch(err => console.log(err))
    }



    render() {
        const { results, msg } = this.state
 
        return (
            <>
            <div className="searchbar">
              <h1>search plants</h1>
              <Form onSubmit={this.handleSearch}>
                 <InputGroup size="lg">
                    <FormControl name="input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    <Button type="submit">Go!</Button>
                </InputGroup>
                </Form>
            </div>

            <div className="results">
            {msg}
            { results.data &&
              results.data.map((item, i) => {
                return <div key={i} className="plant-box">
                  <h3>{item.common_name}</h3>
                  <img src={item.image_url} alt="plant" height="100" />
                  <div>{item.family}</div>
                  <div>{item.family.common_name}</div>
                  <div>{item.scientific_name}</div>
                </div>
              })

            }
            </div>
            </>
        )
    }
}
