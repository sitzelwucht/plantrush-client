import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'


export default class SearchPlants extends Component {

    state = {
        results: [],
        msg: ''
        // loading: true
    }

    
    handleSearch = (event) => {
        let queryStr = event.target.value.toLowerCase()
        axios.get(`https://trefle.io/api/v1/plants?token=${config.TREFLE_KEY}&q=${queryStr}`, {
          // headers:  {
          //   'Access-Control-Allow-Origin': '*',
          //   'origin': 'localhost:3000',
          //   'ip': '89.12.72.220'
          // },
       
        
        })
        .then(response => {
            this.setState({
              results: response.data,
            //   loading: false
            })
            if (!queryStr) {
              this.setState({
                results: [],
                msg: ''
              })
            }
            if (queryStr && response.data.length === 0) {
              this.setState({
                msg: 'no results were found'
              })
            }
        })
        .catch(err => console.log(err))
    }






    render() {

        const { results, msg } = this.state
        
        return (
            <>
            <div className="searchbar">
              <h1>search plants</h1>
                 <InputGroup size="lg">
                    <FormControl onChange={this.handleSearch} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>
            <div className="results">
            {msg}
            {
              results.map((item, i) => {
                return <div key={i} className="plant-box">
                  <h3>{item.common_name}</h3>
                  <img src={item.image_url} alt="plant" />
                  <h5>{item.family}</h5>
                  <h5>{item.family.common_name}</h5>
                  <h5>{item.scientific_name}</h5>
                </div>
              })

            }
            </div>
            </>
        )
    }
}
