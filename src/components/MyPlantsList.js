import React, { Component } from 'react'
import AddPlantForm from './AddPlantForm'
import { Button } from 'react-bootstrap'
import PlantItem from './PlantItem'
import axios from 'axios'
import config from '../config'


export default class MyPlantsList extends Component {


    state = {
        plants: [],
        showForm: false,
        loggedInUser: null
    }

    
    handleAddPlant = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let scientific_name = e.target.scientific_name.value
        let description = e.target.description.value
        let watering = e.target.watering.value
        let light = e.target.light.value
        let imageurl = e.target.imageurl.value
        

    axios.post(`${config.API_URL}/api/add-plant`, {
        name: name,
        scientific_name: scientific_name,
        description: description,
        watering: watering,
        light: light,
        imageurl: imageurl,
        added_by: this.props.user._id
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
    // show only user's own plants
    axios.get(`${config.API_URL}/api/myplants`)
      .then((response) => {
        let myPlants = response.data.filter((item) => {
            return item.added_by === this.props.user._id
        })
        this.setState({ plants: myPlants})
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
        const { user } = this.props

        if (!user) {
            return <div>logging out</div>
        }

        return ( 
                <div className="plants">
                    <div className="sub-header">
            {
                showForm ? <AddPlantForm onAdd={this.handleAddPlant}/> : <Button onClick={this.handleShowForm} > + Add Plant </Button>
            }

                    </div>
                    <div className="plant-container">
               
                     {
                        plants.map((item, i) => {
                            return <div className="plant-item" key={i}><PlantItem 
                                    id={item._id}
                                    imageurl={item.imageurl}
                                    name={item.name} 
                                    description={item.description} 
                                    watering={item.watering} 
                                    light={item.light} />
                                    </div>
                         })
                     }   
                     </div>
                </div>
    
                )
            }
        }


