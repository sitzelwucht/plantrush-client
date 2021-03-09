/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import Moment from 'moment';
import { Button } from 'react-bootstrap'
import EditPlantForm from './EditPlantForm'

class PlantDetail extends Component {


    state = {
        plant: {},
        showForm: false,
        loading: true,
        loggedInUser: null
    }


    handleDelete = () => {
        axios.delete(`${config.API_URL}/api/myplants/${this.props.plantid}`)
        .then(() => {
            this.props.history.push('/mypage')
        })
        .catch(err => console.log(err))
    }


    handleShowForm = () => {
        this.setState({
            showForm: true
        })
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/api/myplants/${this.props.plantid}`)
        .then(response => {
            this.setState({
                plant: response.data,
            })
        })
        .catch(err => console.log(err))
        
      }
  

    
    render() {

        const { plant, showForm } = this.state

        Moment.locale('en');
        return (
            <section className="main-container">
            <div className="detail-box">
                <div className="detail-header">
                    <div>{plant.name} </div>
                    <div className="btns">
                   { <Button variant="light" onClick={this.handleShowForm}>edit</Button> } 
                    <Button variant="light" onClick={this.handleDelete}>delete</Button>
                    </div>
                </div>

                { showForm && <EditPlantForm plantid={plant._id} /> } 

                <div className="plant-details">
                    <div className="facts">
                    <div className="sci-name">Scientific name: {plant.scientific_name}</div>
                        <div className="watering">Watering: <span>{plant.watering} </span></div>
                        <div className="lighting">Light: <span>{plant.light}</span> </div>
                        <div className="added">Added: {Moment(plant.added).format(' DD MMM yyyy')} </div>
                    </div>
                    <img src={plant.imageurl} height="400" alt="" />
              

                </div>
                
                <p>{plant.description}</p>
            </div>
            </section>
        )
    }
}


export default withRouter(PlantDetail)