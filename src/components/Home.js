import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
 
export default class Home extends Component {



    state = {
      loggedinUser: null,
      time: new Date()
    }


    componentDidMount(){
        if (!this.props.user) {
          axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
            .then((response) => {
                this.setState({
                  loggedInUser: response.data,
                  time: new Date()
                })
            })
            .catch((err) => {
              console.log(err)
            
            })
        }  
      }


      componentDidUpdate() {
        if (!this.props.user) {
          axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
            .then((response) => {
                this.setState({
                  loggedInUser: response.data,
                  time: new Date()
                })

            })
            .catch((err) => {
              console.log(err)
            })
        }  
      }
    

    render() {
        // const { loggedInUser } = this.state
        // console.log('state ' + loggedInUser.email)
        
        const { user, time } = this.props
        console.log(time)
              return (
          
              <div>
                <div className="content-box">
                { user ? <div>Welcome to your home page {user.email} </div> : 'Please log in to use this site because currently you\'re null' }
            
                </div>
 
              </div>
        )


        }

    
}
