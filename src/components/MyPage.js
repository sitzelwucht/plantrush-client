import React, { Component } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'
import Moment from 'moment';
import MyPlantsList from './MyPlantsList'
import MyPostsList from './MyPostsList'


export default class MyPage extends Component {

    
    state = {
        loggedInUser: null,
        isLoading: false
      }
  

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
        const { user } = this.props
        Moment.locale('en');
        return (
            <div className="my-page">
                <div className="my-page-header">
                    <h1>My Page</h1>
                    <div className="userinfo">

                    <div>Username: {user.email}</div>
                    <div>Registered: {Moment(user.registered).format('DD MMM yyyy')}</div>
                    <div><Button variant="light">Edit information</Button> </div>

                    </div>
                </div>
                   
                <div >
                    <div className="tab">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="plants" aria-selected="true"  title="My Plants">
                            <MyPlantsList user={this.props.user} />
                        </Tab>
                        <Tab eventKey="posts" title="Newest Posts">
                            <MyPostsList user={this.props.user} />
                        </Tab>
                        </Tabs>

                    </div>
                </div>
    </div>)




}





}
