import React, { Component } from 'react'
import AddPlantForm from './AddPlantForm'
import { Button } from 'react-bootstrap'
import PlantItem from './PlantItem'
import axios from 'axios'
import config from '../config'


export default class MyPlantsList extends Component {


    state = {
        plants: [],
        showForm: false
    }

    handleAddPlant = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let description = e.target.description.value
        let watering = e.target.watering.value
        let light = e.target.light.value

    axios.post(`${config.API_URL}/api/add-plant`, {
        name: name,
        description: description,
        watering: watering,
        light: light
    })
    .then(response => {
        this.setState({
            plants: [response.data, ...this.state.plants],
            showForm: false
        })
    })
}

    handleShowForm = () => {
        this.setState({
            showForm: true
        })
    }

componentDidMount(){

    axios.get(`${config.API_URL}/api/myplants`)
      .then((response) => {
        this.setState({ plants: response.data})
      })
      .catch(() => {
        console.log('failed to fetch plants')
      })

    if (!this.state.loggedInUser) {
      axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }  
  }

    render() {
     const { plants, showForm } = this.state

        return ( 
                <div className="plants">
                    <div className="sub-header">

            {
                showForm ? <AddPlantForm onAdd={this.handleAddPlant}/> : <Button onClick={this.handleShowForm} >Add Plant </Button>
            }

                    </div>
                    
                    <div className="plants">
                     {
                        plants.map((item, i) => {
                            return <PlantItem 
                                    id={item._id}
                                    name={item.name} 
                                    description={item.description} 
                                    watering={item.watering} 
                                    light={item.light} />
                         })
                     }   
                    </div>
                </div>
    
                )
            }
        }


