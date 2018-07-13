import React, { Component } from "react";
import WebFont from "webfontloader";
import {Col, Row, Container, ListGroup, Jumbotron, Card, CardBody, CardImg, CardText, CardTitle, Tooltip} from "reactstrap";
import API from "../../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import HarvestModal from "../../Modal/HarvestModal";
import HomeButton from "../../buttons/HomeButton"
import imagesObject from "../../ImagesObject/ImagesObject";
import "./AvailHarvests.css"
import dateFns from "date-fns";


// import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
  })

class AvailHarvests extends Component {
    state = {
        my_bounty: [],
        crop: "",
        date_available: "",
        pickup_time_start: "",
        pickup_time_end:"",
        street_address:"",
        city:"",
        state:"",
        comments:""
      };

      componentDidMount() {
        this.loadMyBounty();
    }

    loadMyBounty = () => {
        API.getMyBounty()
          .then(res =>
            this.setState({ my_bounty: res.data, crop: "", date_available: "", pickup_time_start:"", pickup_time_end: "", street_address:"", city:"", state:"",comments:""})
          )
          .catch(err => console.log(err));
      };

      convertStartTime = pickup_time_start=> {
        console.log(pickup_time_start);
        let time = (pickup_time_start);
        let timeArray = time.split(':');
        console.log(timeArray);
        let hours = (timeArray[0]);
        console.log(hours);
        let minutes = (timeArray[1]);
        console.log(minutes);
        let timeValue = ("");
        if(hours > 0 && hours < 12){
            timeValue = ("" + hours);
        } else if (hours > 12){
            timeValue = (hours -12);
        } else if (hours === 0){
            timeValue = "12";
            
        }
        
        timeValue += (minutes < 10) ? ":" + minutes : ":" + minutes;
        timeValue += (hours >= 12) ? "pm" : "am";
        console.log(timeValue);
        console.log(pickup_time_start);
        return(timeValue);
    };
    
    convertEndTime = pickup_time_end=> {
        console.log(pickup_time_end);
        let time = (pickup_time_end);
        let timeArray = time.split(':');
        console.log(timeArray);
        let hours = (timeArray[0]);
        console.log(hours);
        let minutes = (timeArray[1]);
        console.log(minutes);
        let timeValue = ("");
        if(hours > 0 && hours < 12){
            timeValue = ("" + hours);
        } else if (hours > 12){
            timeValue = (hours -12);
        } else if (hours === 0){
            timeValue = "12"
            
        }
        
        timeValue += (minutes < 10) ? ":" + minutes : ":" + minutes;
        timeValue += (hours >= 12) ? "pm" : "am";
        console.log(timeValue);
        console.log(pickup_time_end);
        return(timeValue);
    };
      
 
  render() {
    return (
        <div className="containerwrap">
        {/* Border - top */}
        <div> 
            <Row>
                <Col xs="3" id="homeBtnCol">
                    <HomeButton />
                </Col>
                <Col xs="6" id="titleCol">
                    <p id="pageTitle"> Available Harvests </p>
                </Col>
                <Col xs="3">
                </Col>
            </Row>
            <div className="border-wrapper">
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign"></Col>
                <Col xs="3" className="imageAlign">
                <div id="imageBox">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </div>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign"></Col>
                <Col xs="3" className="imageAlign">
                <div id="imageBox">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </div>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign"></Col>
            </Row>
            <Row className="borders"></Row>           
            </div>
        </div>
        {/* end of Border - top */}
        {/* Data base will populate within Jumbotron div below subtitle */}
        <Jumbotron id = "dbPopAh">
            <div className = "dbPopulate">
            {this.state.my_bounty.length ? (
              <Row>
              {this.state.my_bounty.map(my_bounty => (
                  <Col xs="12" sm="6" md="4" lg="3" >
              <Card className="card-display" key={my_bounty._id}>
               <CardImg top width="100%" src={imagesObject[my_bounty.crop.toLowerCase()]}>
                  </CardImg>
                  <CardBody>
                      <CardTitle className="card-title">{my_bounty.crop}</CardTitle>
                      <CardText className="card-text">Available on: {dateFns.format(new Date(my_bounty.date_available),'dddd, MM/DD/YYYY')}</CardText>
                      <CardText className="card-text">From: {this.convertStartTime(my_bounty.pickup_time_start)}, Until: {this.convertEndTime(my_bounty.pickup_time_end)}</CardText>
                      <CardText>Address: {my_bounty.street_address}</CardText>
                      <CardText>{my_bounty.city}, {my_bounty.state_ab}</CardText>
                      <CardText>Comments: {my_bounty.comments}</CardText>
                  </CardBody>
              </Card>
              </Col>
              ))}
              </Row>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
            </div>
        </Jumbotron>
        {/* end of database Jumbotron */}
        {/* Border - bottom */}
        <div> 
        <div className="border-wrapper">
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign"></Col>
                <Col xs="3" className="imageAlign">
                <div id="imageBox">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </div>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign"></Col>
                <Col xs="3" className="imageAlign">
                <div id="imageBox">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </div>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign"></Col>
            </Row>
            <Row className="borders"></Row>
        </div>
        </div>
        {/* end of Border -bottom */}
        </div>
        );
    }
}

export default AvailHarvests;