import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
 
export default class Home extends Component {



    state = {
      loggedinUser: null
    }


    componentDidMount(){
        if (!this.props.user) {
          axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
            .then((response) => {
                this.setState({
                  loggedInUser: response.data
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
                  loggedInUser: response.data
                })

            })
            .catch((err) => {
              console.log(err)
            })
        }  
      }
    

    render() {
    
        const { user } = this.props

              return (
          
              <div>
                <div className="content-box">
                { user ? <div>Welcome to your home page {user.email}</div> : 'Please log in to use this site because currently you\'re null' }
            
                </div>
              </div>
        )


        }

    
}
