import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Col, Row, Container } from "../src/components/grid";
import AvailHarvests from "./components/pages/AvailHarvests";
import Home from "./components/pages/Home";
import Landing from "./components/pages/Landing";
import MyBounty from "./components/pages/MyBounty";
import CreateUser from "./components/pages/CreateUser";
import CardComponent from "./components/cards/CardComponent";
// import HarvestModal from "./components/Modal/HarvestModal";
// import {Container} from "reactstrap";
import "./App.css";
import "./components/cards/CardComponent.css";
import history from './history';


// import auth0 from "auth0-js";

// *******************
// import "./components/sandboxMelinda/sandbox.css";
// *******************



class App extends Component {
constructor(props){
  super(props)
  this.state = {};
}

componentDidMount=()=>{
  this.setState({})
}


changeAppState = (name, value) => {
  this.setState({[name]:value})
}
  render() {
    return (
      
      
        <Router  history={history}>

          <Switch>
            <Route exact path="/" component={Landing}  />} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/cards" component={CardComponent} /> */}
            <Route exact path="/mybounty" component={MyBounty} />
            <Route exact path="/availharvests" component={AvailHarvests} />
            <Route exact path="/createuser" component={CreateUser} />
          </Switch>

        </Router>
      
    );
  }
}



export default App;
