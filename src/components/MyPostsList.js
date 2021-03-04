import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
import AddPostForm from './AddPostForm'
import ListItem from './ListItem'

export default class MyPostsList extends Component {

    render() {
        return (
       


<>
<div className="posts">


        <div className="sub-header">

                <ModalComponent 
                            btnTitle="add post" 
                            btnStyle="primary green" 
                            modalHeading="Add Post"
                            modalBody={<AddPostForm onLogin={this.handleAddPost}/>}    
                            />
        </div>
            



        <div className="plants">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        


            </div>
    
</>

     
        )
    }
}
