import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import Clock from './Clock'



export default class Home extends Component {


    state = {
      loggedinUser: null,
      fact: null,
      isLoading: false
    }

    getRandomFact = () => {
      this.setState({isLoading: true})
      axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(response => {
          this.setState({fact: response.data, isLoading: false})
      })
      .catch(err => console.log(err))
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
        this.getRandomFact()
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

      const { user } = this.props
      const { fact, isLoading } = this.state

        if (isLoading) {
          return <div>Loading...</div>
      }
      
        return (
              <div>
                <div className="content-box">
                { user ? <div className="welcome"><div>Welcome to your home page <span>{user.email}</span></div> 
                <Clock /> </div>: 'Please log in to use this site because currently you\'re null' }
                
                <div className="random">Random fact:
                { fact && <div className="fact">{fact.text}</div> }
                </div>
                </div>
            
              </div>
        )


        }

    
}
