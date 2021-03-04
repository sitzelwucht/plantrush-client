import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'
import MyPlantsList from './MyPlantsList'
import MyPostsList from './MyPostsList'


export default class MyPage extends Component {
    
    componentDidMount(){

        if (!this.props.user) {
          axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
            .then((response) => {
                this.setState({
                  loggedInUser: response.data
                })
            })
            .catch((err) => {console.log(err)})
        }  
      }
    

    render() {
        return (
            <div className="my-page">
                <div className="my-page-header"><h1>My Page</h1></div>
                    
                    <div className="my-page-container">

        

        <div className="container tab">

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="plants" title="Plants">
                    <MyPlantsList />
                </Tab>
                <Tab eventKey="posts" title="Posts">
                    <MyPostsList />
                </Tab>
                </Tabs>

        </div>
        </div>
    </div>)




}





}
