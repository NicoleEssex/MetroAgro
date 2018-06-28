import React, { Component } from "react";
import { ListGroup, ListGroupItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import WebFont from "webfontloader";
import HomeButton from "../../buttons/HomeButton/";
import HarvestModal from "../../Modal/HarvestModal";
import AddCropFormButton from "../../buttons/AddCropFormButton";
import "./MyBounty.css"
import API from "../../../utils/API"
import DeleteBtn from "../../buttons/DeleteBtn/DeleteBtn"
import { Link } from "react-router-dom";


WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
})

class MyBounty extends Component {
    state = {
        Harvest: [],
        crop: "",
        harvest_date: "",
        available: "",
        pickup_time: ""
      };

    loadCrops = () => {
        API.getCrops()
          .then(res =>
            this.setState({ Harvest: res.data, crop: "", harvest_date: "", available:"", pickup_time: "" })
          )
          .catch(err => console.log(err));
      };
 
    deleteCrops = id => {
        API.deleteCrops(id)
            .then(res => this.loadCrops())
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.crop) {
            API.saveCrop({
                crop: this.state.crop,
                harvest_date: this.state.harvest_date,
                available: this.state.available,
                pickup_time: this.state.pickup_time

            })
                .then(res => this.loadCrops())
                .catch(err => console.log(err));
        }
    };



    render() {
        return (
            <div id="mb-main-container">
                <HomeButton />

                <Jumbotron className="myBountyContainer">
                    <p id="myBountyTitle">Your Crops</p>
                    <div className="popdbinfo">
                        Crops will populate here from database.
                        {this.state.Harvest.length ? (
              <ListGroup>
                {this.state.Harvest.map(harvest => (
                  <ListGroupItem key={harvest._id}>
                    <Link to={"/Harvest/" + harvest._id}>
                      <strong>
                        {harvest.crop} can be harvested on {harvest.harvest_date} at {harvest.pickup_time}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCrops(harvest._id)} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
                </div>
            </Jumbotron>
 
            <FormGroup className="mbFormGroup">
                <Label  for="exampleSelect">Category of Harvest</Label>
                <Input type="select"    name="select"  id="exampleSelect">
                    <option>Select One</option>
                    <option>Fruit</option>
                    <option>Vegetable</option>
                    <option>Herbs</option>
                </Input>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date available" />
                <Label for="exampleTime">Time Available for Drop-by</Label>
                <span><Input type="time" name="time" id="exampleTime" placeholder="time available"  /></span>
                <span>Until<Input type="time" name="time" id="exampleTime" placeholder="time available" /></span>
                <Label for="exampleText">Additional Comments</Label>
                <Input type="textarea" name="text" id="exampleText" />
                <div className ="box-label-group">
                <br/>
                <Label check>
                <Input type="checkbox" id="checkbox"/>{' '}
               
                </Label>
                <span id="ready">Ready for Available Harvest</span>
                <span><AddCropFormButton 
                        disabled={!(this.state.crop)}
                        onClick={this.handleFormSubmit}/>
                  </span>
                </div>
            </FormGroup>
          </div>

        );
    }
}

export default MyBounty;