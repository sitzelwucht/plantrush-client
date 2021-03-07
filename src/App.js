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
import PostDetail from './components/PostDetail'
import PlantDetail from './components/PlantDetail'
import NotFound from './components/NotFound'


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
      password2: e.target.password2.value
    }
    axios.post(`${config.API_URL}/api/signup`, newUser)
    .then(response => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push('/home')
      })
    })
    .catch(err => {
      this.setState({
         error: Object.values(err.response.data)[0]
      })
    })
  }


  handleLogin = (e) => {
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
    .catch(err => {
      this.setState({error: Object.values(err.response.data)[0]})
    })
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
          return <Landing onSignup={this.handleSignup} onLogin={this.handleLogin} msg={error} />
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

        <Route path="/post/:postid" render={(routeProps) => {
          return <PostDetail user={loggedInUser} postid={routeProps.match.params.postid} />
        }} />

        <Route path="/plant/:plantid" render={(routeProps) => {
          return <PlantDetail user={loggedInUser} plantid={routeProps.match.params.plantid} />
        }} />

        <Route component={NotFound} />
        
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)