import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'


export default class SearchPlants extends Component {

    state = {
        plants: [],
        filteredPlants: [],
        msg: ''
        // loading: true
    }
    
    getPlantData = () => {
        axios.get(`${config.API_URL}/api/all-plants`)
        .then(response => {
            this.setState({
              plants: response.data,
            })
        })
        .catch(err => console.log(err))
    }


    handleSearchInput = (event) => {
      let queryStr = event.target.value.toLowerCase()

      let filteredResults = this.state.plants.data.filter(item => {
        return item.common_name.toLowerCase().includes(queryStr)
      })

      this.setState({
        filteredPlants: filteredResults
      })

      // if (!queryStr) {
      //   this.setState({
      //     results: [],
      //     msg: ''
      //   })
      // }
      // if (queryStr && response.data.length === 0) {
      //   this.setState({
      //     msg: 'no results were found'
      //   })
      // }
    }

    componentDidMount() {
      this.getPlantData()
    }

    componentDidUpdate() {
      this.getPlantData()
    }

    render() {
        const { filteredPlants, msg } = this.state
      
        return (
            <>
            <div className="searchbar">
              <h1>search plants</h1>
                 <InputGroup size="lg">
                    <FormControl onChange={this.handleSearchInput} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>
            <div className="results">
            {msg}
            {
              filteredPlants.map((item, i) => {
                return <div key={i} className="plant-box">
                  <h3>{item.common_name}</h3>
                  <img src={item.image_url} alt="plant" height="100" />
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
