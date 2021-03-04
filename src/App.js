/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import axios from 'axios'
import config from './config'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import MyPage from './components/MyPage'
import SearchPlants from './components/SearchPlants'
import SearchPosts from './components/SearchPosts'


class App extends Component {


  state = {
    loggedInUser: null, 
    error: null,
  }


  handleSignup = (e) => {
    e.preventDefault()
    let newUser = {
      email: e.target.email.value,
      password: e.target.password.value,
      password2: e.target.password.value
    }
    axios.post(`${config.API_URL}/api/signup`, newUser)
    .then(response => {
      this.setState({
        loggedInUser : response.data
      }, () => {
        this.props.history.push('/home')
      })
    })
    .catch(err => {
      this.setState({
        error: err.response.data
      })
    })
  }


  handleLogin = (e) => {
    alert('hello')
    e.preventDefault()
    let user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios.post(`${config.API_URL}/api/login`, user, { withCredentials: true })
    .then(response => {
      this.setState({
        loggedInUser: response.data,
      }, () => {
        this.props.history.push('/home')
      })
    })
    .catch(err => console.log('something went wrong while logging in', err))
  }



  handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
    .then(() => {
      this.setState({
        loggedInUser: null
      }, () => {
        this.props.history.push('/')
      })
    })
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
    const { loggedInUser, error  } = this.state

    return (

      <div>
      <NavBar onLogout={this.handleLogout} user={loggedInUser}/>
      <Switch>

        <Route exact path="/" render={() => {
          return <Landing onSignup={this.handleSignup} onLogin={this.handleLogin}/>
          }
        } />


        <Route path="/home" render={(routeProps) => {
          return <Home user={loggedInUser} />
        }} />

        <Route path="/mypage" render={(routeProps) => {
          return <MyPage user={loggedInUser} {...routeProps} />
        }} />

        <Route path="/plant-search" render={(routeProps) => {
          return <SearchPlants user={loggedInUser} {...routeProps} />
        }} />

        <Route path="/post-search" render={(routeProps) => {
          return <SearchPosts user={loggedInUser} {...routeProps} />
        }} />

        </Switch>
      </div>
    )
  }
}


export default withRouter(App)