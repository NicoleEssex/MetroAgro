import React, { Component } from "react";
import WebFont from "webfontloader";
import {Col, Row, Container } from "reactstrap"
import "./Home.css"
import { Link } from "react-router-dom";
// import API from "./utils/API.js";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";

WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
  })

  export default class Home extends React.Component {
    render() {
      return (
        <Container id="homebkg">
          <Row>
            <Col className="app-title"><h1>AgraLove</h1></Col>
          </Row>
          <Row>
            <Col>
            <div className="image-container"><a href = "/availharvest/"> <img src={require("./vegibask500.jpg")} id="availHarvImg" alt="basket of fresh vegetables"/>
            <p className="image-title">Available Harvests</p></a>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="image-container">
            <a href = "/mybounty/"><img src={require("./pant-sched500.png")} id="myBountyImg" alt="chart of vegetables"/></a>
            <p className="image-title">My Bounty</p>
            </div>
            </Col>
          </Row>
        </Container>
      );
    }
  }