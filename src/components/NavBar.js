import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
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
            
               <Navbar collapseOnSelect expand="lg" variant="dark greenrush">
              
             
                <Link to="/home"><Navbar.Brand className="brand">plantrush </Navbar.Brand></Link>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">
                <Nav.Link href="#features">My page</Nav.Link>
                <NavDropdown title="Search" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">All plants</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Posts by others</NavDropdown.Item>
                  <NavDropdown.Divider />
            
                </NavDropdown>
              </Nav>
              <Nav>

          {
            user ? (<> <NavDropdown.Item href="#action/3.4">Loggedin in as {user.email.toString()}</NavDropdown.Item>
                    <Button onClick={this.props.onLogout} variant="info">Logout</Button> </>) : null
          }
              </Nav>
            </Navbar.Collapse>



          </Navbar>
            </header>

        )
    }
}
