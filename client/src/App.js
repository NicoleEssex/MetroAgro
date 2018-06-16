import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {Col, Row, Container } from "reactstrap"
import './App.css';
import AvailHarvests from "./pages/AvailHarvests";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import MyBounty from "./pages/MyBounty";
import CreateUser from "./pages/CreateUser";
import HarvestModal from "./components/Modal/HarvestModal";

const App = () => (
  
  <Container fluid>
  <Router>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/mybounty" component={MyBounty} />
        <Route exact path="/availharvests" component={AvailHarvests} />
        <Route exact path="/createuser" component={CreateUser} />
      </Switch>

  </Router>
  </Container>


);

export default App;
