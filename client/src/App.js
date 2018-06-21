import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container } from "../src/components/grid";
import AvailHarvests from "./components/pages/AvailHarvests";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";
import MyBounty from "./components/pages/MyBounty";
import CreateUser from "./components/pages/CreateUser";
import HarvestModal from "./components/Modal/HarvestModal";
import {Container} from "reactstrap";

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
