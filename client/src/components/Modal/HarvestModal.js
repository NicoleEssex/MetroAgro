import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import "./Modal.css"
// import './harvest.css'

class HarvestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="modal-group">
       <Button color="danger" onClick={this.toggle}>Add A Crop</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Harvest Info</ModalHeader>
          <ModalBody>
                <FormGroup>
                <Label  for="exampleSelect">Category of Harvest</Label>
                  <Input type="select"    name="select"  id="exampleSelect">
                    <option>Select One</option>
                    <option>Fruit</option>
                    <option>Vegetable</option>
                    <option>Herbs</option>
                  </Input>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date available" />
                <Label for="exampleTime">Time Available for Drop-by</Label>
                <span><Input type="time" name="time" id="exampleTime" placeholder="time available"  /></span>
                <span>Until<Input type="time" name="time" id="exampleTime" placeholder="time available" /></span>
                <Label for="exampleText">Additional Comments</Label>
                <Input type="textarea" name="text" id="exampleText" />
                <div className ="box-label-group">
                <br/>
                <Label check>
                <Input type="checkbox" />{' '}
                  Ready to Post
                </Label>
                </div>
                </FormGroup>
                </ModalBody>                
          <ModalFooter>
            <Button className="submit-button" onClick={this.toggle}>Submit Harvest</Button>{' '}
            <Button className="cancel-button" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>    
          <div className="clearboth"></div>    
        </Modal>
      
     </div> 
    );
  }
}

export default HarvestModal;