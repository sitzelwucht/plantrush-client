import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Home from './Home'
import axios from 'axios'
import config from '../config'
import { withRouter } from 'react-router-dom'


 class Landing extends Component {

    state = {
        error: null,
        loggedInUser: null
    }

  componentDidMount(){
    if (!this.state.loggedInUser) {
      axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
        .then((response) => {
            this.setState({
              loggedInUser: response.data,
            })
        })
        .catch((err) => {console.log(err)})
    }  
  }


    render() {
        const { user } = this.props
        const { loggedInUser } = this.state

        if(!user) {
            return (
                <div className="landing">
                       <div className="intro">
                       <h2><img src="/images/noun_Plant_9393.svg" alt="" /><span className="darkgreen light">plant</span><span>rush</span></h2>
                           <div className="intro-btns">
                           <ModalComponent 
                               btnTitle="Log in" 
                               btnStyle="primary green" 
                               modalHeading="Log in"
                               msg={this.props.msg}
                               resetErr={this.props.resetErr} 
                               modalBody={<LoginForm onLogin={this.props.onLogin} />}    
                               />
                           <ModalComponent 
                               btnTitle="Sign up" 
                               btnStyle="secondary darkgreen" 
                               modalHeading="Sign up"
                               msg={this.props.msg}
                               resetErr={this.props.resetErr}
                               modalBody={<SignupForm onSignup={this.props.onSignup} />}    
                               />
                           </div>     
                       </div>
                   </div>
             
           )
        }
        else return <Home user={loggedInUser}/>

      
    }
}


export default withRouter(Landing)