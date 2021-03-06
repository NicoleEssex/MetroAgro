import React from "react";
import WebFont from "webfontloader";
import { Col, Row, Container } from "reactstrap";
import "./Home.css";
import queryString from "query-string";
import { login, logout, isLoggedIn } from '../../../utils/AuthService.js';

// import { Link } from "react-router-dom";
// import API from "./utils/API.js";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";

WebFont.load({
  google: {
    families: ["Indie Flower", "cursive", "Roboto Condensed", "sans-serif"]
  }
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let authResp = queryString.parse(window.location.hash);
    // this.props.storeAuth(authResp);
  }
  render() {
    return (
      <Container id="homebkg">
        {this.props.test}
        {/* <Row>
          
        </Row> */}
        <Row>
          <Col xs="3">
          <div>
            {
              (isLoggedIn()) ? (<button id="inAndoutBtn" className="btn btn-danger log" onClick={() => logout()}>Log Out</button>) : (<button in="indAndoutBtn" className="btn btn-info log" onClick={() => login()}>Log In</button>)
            }
          </div>
          </Col>
          <Col xs="6" className="app-title">
            <h1>MetroAgro</h1>
          </Col>
          <Col xs="3">
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="image-container">
              <a href="/availharvests/">
                {" "}
                <img
                  src={require("./vegibask500.jpg")}
                  id="availHarvImg"
                  alt="basket of fresh vegetables"
                />
                <p className="image-title">Available Harvests</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="image-container">
              <a href="/mybounty/">
                <img
                  src={require("./pant-sched500.png")}
                  id="myBountyImg"
                  alt="chart of vegetables"
                />
              </a>
              <p className="image-title">My Bounty</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
