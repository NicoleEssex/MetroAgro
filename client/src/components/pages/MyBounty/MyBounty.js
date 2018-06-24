import React, { Component } from "react";
import {Container, Row, Col,} from "reactstrap";
import HomeButton from "../../buttons/HomeButton/";
import HarvestModal from "../../Modal/HarvestModal";
import DummyModal from "../../Modal/DummyModal";
import AddCropModal from "../../Modal/AddCropModal"
import 'bootstrap/dist/css/bootstrap.min.css';


// import DeleteBtn from "../../components/DeleteBtn";

// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class MyBounty extends Component {

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
                    <HarvestModal />  
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

export default MyBounty;