import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import config from '../config'
import { Link, Redirect } from 'react-router-dom'

export default class SearchPlants extends Component {


    state = {
        posts: [],
        filteredPosts: []
    }


    getPostData = () => {
        axios.get(`${config.API_URL}/api/all-posts`)
        .then(response => {
            this.setState({
              posts: response.data,
            })
        })
        .catch(err => console.log(err))
    }


    handleSearchInput = (event) => {
        let queryStr = event.target.value.toLowerCase()
  
        let filteredResults = this.state.posts.filter(item => {
          return item.content.toLowerCase().includes(queryStr)
        })
  
        this.setState({
          filteredPosts: filteredResults
        })
  
        if (!queryStr) {
          this.setState({
            results: [],
            msg: ''
          })
        }
        if (queryStr && filteredResults.length === 0) {
          this.setState({
            msg: 'no results were found'
          })
        }
      }

      componentDidMount() {
        this.getPostData()
      }
  

    render() {

        const { filteredPosts, msg } = this.state

        if (!this.props.user) {
          return <Redirect to={'/'} /> 
         }

        return (
            <section className="main-container">
            <div className="searchbar">
            
            <h1>search posts</h1>
                 <InputGroup size="lg">
                <FormControl onChange={this.handleSearchInput} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            </div>


            <div className="results">
            {msg}
            {
                filteredPosts.map((item, i) => {
                    return <div key={i} className="post-box">
                    <div className="post-title"><Link to={`/post/${item._id}`}>{item.title}</Link></div>
                    <div>{item.content.slice(0, 200)}(...)</div>
                    </div>
                })
            }

            </div>
            </section>
        )
    }
}
