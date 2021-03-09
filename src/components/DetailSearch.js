import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import Loader from './Loader'

export default class DetailSearch extends Component {


    state = {
        plant: {},
        plantData: {},
        plantDistribution: [],
        leafImages: [],
        flowerImages: []
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
        if (Object.keys(this.state.plant).length === 0) {
        axios.get(`${config.API_URL}/api/detailed-search/${this.props.plant}`)
        .then(response => {
            this.setState({
                plant: response.data,
                plantData: response.data.data,
                plantDistribution: response.data.data.distribution.native,
                leafImages: response.data.data.images.leaf,
                flowerImages: response.data.data.images.flower,
            })
        })
        .catch(err => console.log(err))
        }
    } 



    render() {

        const { plant, plantData, plantDistribution, leafImages, flowerImages } = this.state

        return (
            <div className="detail-box">
                {
                    Object.keys(plant).length > 0 ? <>
                    <div className="detail-header">
                        <div>{plantData.common_name} </div>
                        <div>{plantData.family}</div>
                    </div>
                
                       <div className=" trefle-box">
                            <div className="trefle-facts">
                                <div><span>Edible:</span> {plantData.edible ? 'yes' : 'no'}</div>

                                <div><span>Native Distribution: </span>
                                    { plantDistribution ? 
                                        plantDistribution.map((item, i) => {
                                    return <div key={i}> {item}</div>
                                    }) : 'N/A'
                                    }
                                </div> 
                                
                            </div>

                            <div className="trefle-img"><img src={plantData.image_url} alt=""  height="450" /></div>
                       
                       </div>

                        <div className="trefle-images">
                            <h6>leaves</h6>
                            <div className="wrap leaf">
                                { leafImages ?
                                    leafImages.map((item, i) => {
                                        return <div key={i}> <img src={item.image_url} height="175" alt="" /></div>
                                    }) : 'N/A'
                                }
                            </div>
                            <h6>flowers</h6>

                            <div className="wrap flower">
                            { flowerImages ? 
                                    flowerImages.map((item, i) => {
                                        return <div key={i}> <img src={item.image_url} height="175" alt="" /></div>
                                    }) : 'N/A'
                                }
                            </div>
                       </div> 
                    </> : <Loader />
                }

            </div>
        )
    }
}
