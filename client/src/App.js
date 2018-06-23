import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container } from "../src/components/grid";
import AvailHarvests from "./components/pages/AvailHarvests";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";
import MyBounty from "./components/pages/MyBounty";
import CreateUser from "./components/pages/CreateUser";
import HarvestModal from "./components/Modal/HarvestModal";
import { Container } from "reactstrap";
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import auth0 from "auth0-js";

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
constructor(props){
  super(props)
  this.state = {};
}

componentDidMount=()=>{
  this.setState({test:"this is a test"})
}
login() {
  auth.login()
}
changeAppState = (name, value) => {
  this.setState({[name]:value})
}
  render() {
    return (
      <Container fluid>
        <Router  history={history}>

          <Switch>
            <Route exact path="/" component={() => <Landing auth={auth}  login={this.login} test={this.state.test} />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/mybounty" component={MyBounty} />
            <Route exact path="/availharvests" component={AvailHarvests} />
            <Route exact path="/createuser" component={CreateUser} />
          </Switch>

        </Router>
      </Container>
    );
  }
}


export default App;
