import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
import AddPlantForm from './AddPlantForm'
import PlantItem from './PlantItem'
import axios from 'axios'
import config from '../config'


export default class MyPlantsList extends Component {


    state = {
        plants: []
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
            plants: [response.data, ...this.state.plants]
        })
    })
}


componentDidMount(){

    axios.get(`${config.API_URL}/api/myplants`)
      .then((response) => {
        console.log(response.data)
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
     const { plants } = this.state

        return ( 
                <div className="plants">
                    <div className="sub-header">
                <ModalComponent 
                    btnTitle="add plant" 
                    btnStyle="primary green" 
                    modalHeading="Add Plant"
                    modalBody={<AddPlantForm onAdd={this.handleAddPlant}/>}    
                />

                    </div>
                    
                    <div className="plants">
                     {
                        plants.map((item, i) => {
                            return <PlantItem 
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


