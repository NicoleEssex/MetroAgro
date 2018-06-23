import React, { Component } from "react";
import {Col, Row, Container } from "reactstrap";
import "./Home.css";
import Image from "./vegbask.jpg";
// import API from "./utils/API.js";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {

  render() {
    return (
        <Container fluid>
            <Row>
                <Col >
                Logo and cool shit here
                </Col>
            </Row>
            <Row>
                <Col>
                <h1>My bounty</h1>
                <img src="vegbask.jpg"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <h1>Available Harvests</h1>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Home;