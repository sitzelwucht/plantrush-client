import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

export default class DetailSearch extends Component {


    state = {
        plant: {},
        plantData: {}
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        })
        axios.get(`${config.API_URL}/api/detailed-search/${this.props.plant}`)
        .then(response => {
            this.setState({
                plant: response.data,
            })
        })
       .catch(err => console.log(err))
      }
  

    componentDidUpdate() {
        if (Object.keys(this.state.plant).length=== 0) {
        axios.get(`${config.API_URL}/api/detailed-search/${this.props.plant}`)
        .then(response => {
            this.setState({
                plant: response.data,
                plantData: response.data.data
            })
        })
        .catch(err => console.log(err))
        }
    } 



    render() {

        const { plant, plantData } = this.state

        return (
            <div className="detail-box">

                {
                    Object.keys(plant).length > 0 ? <>
                    
                    <div className="detail-header">
                        <h5>{plantData.common_name}</h5>
                        <img src={plantData.image_url} alt=""  height="450" />
                    </div>
                    {/* <div>{plantData.distribution.native[0]}</div> */}
                    
                    </> : <div>unfuckindefined</div>
                }

            </div>
        )
    }
}
