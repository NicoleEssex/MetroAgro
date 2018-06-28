import React, { Component } from "react";
import WebFont from "webfontloader";
import {Jumbotron, Col, Row, Container } from "reactstrap";
// import API from "../../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import HarvestModal from "../../Modal/HarvestModal";
import HomeButton from "../../buttons/HomeButton"
import "./AvailHarvests.css"
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
  })

class AvailHarvests extends Component {

  render() {
    return (
        <div className="containerwrap">
        {/* Border - top */}
        <Container> 
            <Row>
                <Col xs="3" id="homeBtnCol">
                    <HomeButton />
                </Col>
                <Col xs="9" id="titleCol">
                    <h1 id="pageTitle"> Available Harvests </h1>
                </Col>
            </Row>
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign">
                    
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign">
                
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign">
                
                </Col>
            </Row>
            <Row className="borders">               
            </Row>
        </Container>
        {/* end of Border - top */}
        {/* Data base will populate within Jumbotron div below subtitle */}
        <Jumbotron id = "dbPopAh">
            <h4 className = "subtitle">Please select the crop you're interested in to get more details about where and when you can pick it up. </h4>
            <div className = "dbPopulate">
            
            </div>
        </Jumbotron>
        {/* end of database Jumbotron */}
        {/* Border - bottom */}
        <Container> 
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign">
                    
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign">
                
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign">
                
                </Col>
            </Row>
            <Row className="borders">               
            </Row>
        </Container>
        {/* end of Border -bottom */}
        </div>
        );
    }
}

export default AvailHarvests;