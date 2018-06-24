import React, { Component } from "react";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Container, Row, Col,FormGroup, Label, Input} from "reactstrap";
import WebFont from "webfontloader";
import HomeButton from "../../buttons/HomeButton/";
import HarvestModal from "../../Modal/HarvestModal";
import AddCropFormButton from "../../buttons/AddCropFormButton";
import "./MyBounty.css"

WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
  })


// import DeleteBtn from "../../components/DeleteBtn";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class MyBounty extends Component {

    render() {
        return (
            <div id = "mb-main-container">
                <HomeButton /> 
                <Jumbotron className="myBountyContainer">
                <p id="myBountyTitle">Your Crops</p>
                <div className="popdbinfo">
                Crops will populate here from database.
                </div>
                </Jumbotron>
                {/* <Jumbotron id="myBountyFormContainer">
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
                
                </Jumbotron> */}
     
      <FormGroup className="mbFormGroup">
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
                <span><Label check>
                <Input type="checkbox" />{' '}
                  Ready for Available Harvests
                </Label></span>
                <span><AddCropFormButton /></span>
                </div>
                </FormGroup>
   
            {/* <Container fluid>
                <Row>
                    <Col > */}
                        

                    {/* </Col>
                 </Row>
                 <Row>
                     <Col> */}
                     
                    
                     {/* </Col>
                     
                 </Row>
                 <Row>
                     <Col>
                     </Col>
                 </Row>
             </Container> */}
             
             </div>
                
        );
    }
}

export default MyBounty;