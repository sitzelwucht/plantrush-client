import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../config'

export default class NavBar extends Component {



  componentDidMount(){
    if (!this.props.user) {
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
  
        return (
            <header className="menu">
           
            <div className="greenrush">
                <div className="nav-top">
                {
                    user ? (<Link to="/home"><div className="brand">plantrush</div></Link>) : null
                  }
                </div>
              <div className="nav-link">
              {
                    user ? (<> <Link to="/mypage">My page</Link>
                    <Link to="/plant-search">Search plants</Link>
                      <Link to="/post-search">Search posts</Link> </>) : null
                  }
              </div>

              <div className="nav-bottom">
                {
                    user ? (<> <div className="username"> Loggedin in as {user.email.toString()}</div>
                      <Button onClick={this.props.onLogout} variant="info logoutBtn">Logout</Button> </>) : null
                  }
              </div>
            </div>
          </header>

        )
    }
}
