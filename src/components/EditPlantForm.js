import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'


export default class EditPlantForm extends Component {

    state = {
        plant: {}
    }

    componentDidMount() {
        let plantid = this.props.plantid
        axios.get(`${config.API_URL}/api/myplants/${plantid}`)
        .then(response => {
            this.setState({
                plant: response.data
            })
        })
        .catch(() => {console.log('failed to fetch plant')})
    }



    handleNameChange = (e) => {
        let newName = e.target.value
        let clonePlant = JSON.parse(JSON.stringify(this.state.plant))
        clonePlant.name = newName 

        this.setState({
            plant: clonePlant
        })
    }

    handleDescChange = (e) => {
        let newDesc = e.target.value
        let clonePlant = JSON.parse(JSON.stringify(this.state.plant))
        clonePlant.description = newDesc 

        this.setState({
            plant: clonePlant
        })
    }


    handleLightChange = (e) => {
        let newLight = e.target.value
        let clonePlant = JSON.parse(JSON.stringify(this.state.plant))
        clonePlant.light = newLight 

        this.setState({
            plant: clonePlant
        })
    }

    handleWateringChange = (e) => {
        let newWatering = e.target.value
        let clonePlant = JSON.parse(JSON.stringify(this.state.plant))
        clonePlant.watering = newWatering 

        this.setState({
            plant: clonePlant
        })
    }


    handleEditPlant = (plant) => {
        axios.patch(`${config.API_URL}/api/myplants/${this.props.plantid}`, {
            name: plant.name,
            description: plant.description,
            watering: plant.watering,
            light: plant.light
        })
        .then(() => {
            this.props.history.push('/mypage')
        })

    } 

    render() {

        const { plant } = this.state

        return (
            <div className="edit-form">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" onChange={this.handleNameChange} value={plant.name} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" onChange={this.handleDescChange} rows={3} value={plant.description} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Watering</Form.Label>
                    <Form.Control name="watering" onChange={this.handleWateringChange} as="select">
                    { plant.watering === 'low' ? <option value="low" selected="selected">low</option> : <option value="low">low</option> }
                    { plant.watering === 'medium' ? <option value="medium" selected="selected">medium</option> : <option value="medium">medium</option> }
                    { plant.watering === 'high' ? <option value="high" selected="selected">high</option> : <option value="high">high</option> }
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Light</Form.Label>
                    <Form.Control name="light" onChange={this.handleLightChange} as="select">
                    { plant.light === 'low' ? <option value="low" selected="selected">low</option> : <option value="low">low</option> }
                    { plant.light === 'medium' ? <option value="medium" selected="selected">medium</option> : <option value="medium">medium</option> }
                    { plant.light === 'high' ? <option value="high" selected="selected">high</option> : <option value="high">high</option> }
                    </Form.Control>
                </Form.Group>

            
                <Button onClick={() => this.handleEditPlant(plant) } variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
