import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";

// import API from "./utils/API.js";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import {Col, Row, Container} from "reactstrap";

class Landing extends Component {
    constructor(props){
        super(props)
    }
    loginTest = () =>{
        this.props.login("test","your Face")
    }

  render() {
    return (
        <Container fluid>
        {this.props.test}
            <h1> Welcome to Metro Agro, {this.props.name}</h1>
            <br/>
            <p> Do you want to see the bounties? <a href="/home">Click Here</a>
             </p>
             <div>
                 <hr/>
                 Please login first
                 <hr/>
                 <button onClick={this.loginTest}> Login </button>
                 {/* onClick={this.props.auth.login} */}
                </div>
        </Container>
        );
    }
}

export default Landing;