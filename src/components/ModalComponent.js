import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


export default class ModalComponent extends Component {

    state = {
      show: false
    } 


      handleClose = () => {
          this.setState({
            show: false
          })
        }

      handleShow = () => {
          this.setState({
            show: true
          })
        }
      
      
    render() {
        return (
            <div>
            <Button variant={this.props.btnStyle} onClick={this.handleShow}>
              {this.props.btnTitle}
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.modalHeading}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              {this.props.modalBody}
              
              </Modal.Body>
            </Modal>
            </div>
        )
    }
}
