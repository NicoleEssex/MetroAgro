import React, { Component } from "react";
import WebFont from "webfontloader";
import "./Landing.css";
import Carousel from "./../../Carousel/Carousel.js"

// import DeleteBtn from "../../components/DeleteBtn";

// import API from "./utils/API.js";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import {Container} from "reactstrap";


WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
})

class Landing extends Component {
    constructor(props){
        super(props)
    }
    loginTest = () =>{
        this.props.login("test","your Face")
    }

  render() {
    return (
        <Container fluid className = "wrapper">
        
        {/* {this.props.test} */}
            <p className = "titles">MetroAgro {this.props.name}</p>
            <br/>
            <Carousel/>
            <br/>
            <br/>
            <br/>
            <p className = "intro"> Join our community and enjoy the healthful benefits of your neighborhood grown produce while helping to cutdown on food waste.</p>
             <div>
                 <button className="login-button" onClick={this.loginTest}> LOGIN </button>
                 {/* onClick={this.props.auth.login} */}
            </div>
        </Container>
        );
    }
}

export default Landing;