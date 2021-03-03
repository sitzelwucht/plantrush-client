import React, { Component } from 'react'
import ListItem from './ListItem'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'

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

        const { user } = this.props
        console.log(user.email)
        return (
            <div className="my-page">
            <div className="my-page-header"><h1>My Page </h1>{user.email}</div>
            <div className="my-page-container">

            <div className="plants-container">
            <div className="sub-header"><h1>plants</h1><Button variant="dark">Add</Button></div>
                <ListItem />
                <ListItem />
            </div>

            <div className="posts-container">
            <div className="sub-header"><h1>posts</h1><Button variant="dark">Add</Button></div>

            </div>

            </div>
            </div>
            
        )
    }
}
