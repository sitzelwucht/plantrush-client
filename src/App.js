import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home'
import Landing from './components/Landing'
export default class App extends Component {





  render() {
    return (
      <div>
    
      
        <Switch>
      <Route exact path="/" render={() => {
        return <Landing />
      }} />

        </Switch>
      </div>
    )
  }
}
