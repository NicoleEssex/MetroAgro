import React, { Component } from "react";
import {Container, Row, Col,} from "reactstrap";
import HomeButton from "../../buttons/HomeButton/";
import AddCropFormButton from "../../buttons/AddCropFormButton";
import HarvestModal from "../../Modal/HarvestModal";

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
                        <AddCropFormButton/> 
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