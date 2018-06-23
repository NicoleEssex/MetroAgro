import React, { Component } from "react";
import {Col, Row, Container } from "reactstrap";
// import API from "../../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import HarvestModal from "../../Modal/HarvestModal";
import HomeButton from "../../buttons/HomeButton"
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';


class AvailHarvests extends Component {

  render() {
    return (
        <Container fluid>
             <Row>
                    <Col >
                        Logo and cool shit here
                        
                        <HomeButton /> 
                    </Col>
                </Row>
            <Row>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default AvailHarvests;