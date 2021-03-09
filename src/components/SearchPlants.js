import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'


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
            <section className="main-container">
            <div className="searchbar">
              <h1>search plants</h1>
              <Form onSubmit={this.handleSearch}>
                 <InputGroup size="lg">
                    <FormControl name="input" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    <Button variant="info" type="submit">Go!</Button>
                </InputGroup>
                </Form>
            </div>

            <div className="results">
            {msg}
            { results.data &&
              results.data.map((item, i) => {
                return <div key={i} className="plant-box">
                <div className="left">
                  <div className="plant-box-header">
                    <h3>{item.scientific_name}</h3>
                    <div>{item.common_name}</div>
                  </div>
                 <Link to={`/detailed-search/${item.slug}`}><Button variant="link" >More info</Button> </Link> 
                </div>
                
                <div className="right">
                  { item.image_url ? <img src={item.image_url} alt="plant" height="100" /> : <img src="/images/placeholder_plant.png" height="150" alt="" />}
                </div>
                </div>
              })

            }
            </div>
            </section>
        )
    }
}
