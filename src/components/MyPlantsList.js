import React, { Component } from 'react'
import ModalComponent from './ModalComponent'
import AddPlantForm from './AddPlantForm'
import ListItem from './ListItem'

export default class MyPlantsList extends Component {
    render() {
        return (
       


<>
<div className="plants">
        <div className="sub-header">
        
                <ModalComponent 
                            btnTitle="add plant" 
                            btnStyle="primary green" 
                            modalHeading="Add Plant"
                            modalBody={<AddPlantForm onLogin={this.handleAddPlant}/>}    
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
