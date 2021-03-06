import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


export default class ModalComponent extends Component {

    state = {
      show: false
    } 


      handleClose = () => {
        // remove error message from modal
          this.props.resetErr()
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
              <Modal.Footer>{ this.props.msg && <span className="error">{this.props.msg}</span> }</Modal.Footer>
              </Modal.Body>
            </Modal>
            </div>
        )
    }
}
