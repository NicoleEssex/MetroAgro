import React, { Component } from "react";
import { ListGroup, ListGroupItem,Jumbotron,FormGroup, Label, Input } from "reactstrap";
import WebFont from "webfontloader";
import HomeButton from "../../buttons/HomeButton/";
// import HarvestModal from "../../Modal/HarvestModal";
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
        my_bounty: [],
        crop: "",
        date_available: "",
        pickup_time_start: "",
        pickup_time_end:"",
        comment:""
      };

    componentDidMount() {
        this.loadMyBounty();
    }

    loadMyBounty = () => {
        API.getMyBounty()
          .then(res =>
            this.setState({ my_bounty: res.data, crop: "", date_available: "", pickup_time_start:"", pickup_time_end: "", comment:"" })
          )
          .catch(err => console.log(err));
      };
 
    deleteMyBounty = id => {
        API.deleteMyBounty(id)
            .then(res => this.loadMyBounty())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const{name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log("handleFormSubmit hit")
        event.preventDefault();
        console.log(this.state);
        if (this.state.crop) {
            API.saveMyBounty({
                crop: this.state.crop,
                date_available: this.state.date_available,
                pickup_time_start: this.state.pickup_time_start,
                pickup_time_end: this.state.pickup_time_end,
                comment: this.state.comment

            })
                .then(res => this.loadMyBounty())
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
                        {this.state.my_bounty.length ? (
              <ListGroup>
                {this.state.my_bounty.map(my_bounty => (
                  <ListGroupItem key={my_bounty._id}>
                    <Link to={"/mybounty/" + my_bounty._id}>
                      <strong>
                        {my_bounty.crop} is ready on {my_bounty.date_available} from {my_bounty.pickup_time_start} until
                        {my_bounty.pickup_time_end} additional comments:
                        {my_bounty.comment}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMyBounty(my_bounty._id)} />
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
                    <Input
                        value={this.state.crop}
                        onChange={this.handleInputChange} 
                        type="select"    name="crop"  id="exampleSelect">
                        <option>Select One</option>
                        <option>Fruit</option>
                        <option>Vegetable</option>
                        <option>Herbs</option>
                    </Input>
                <Label for="exampleDate">Date</Label>
                    <Input 
                        value={this.state.date_available}
                        onChange={this.handleInputChange}
                        type="date" name="date_available" id="exampleDate" placeholder="date available" />
                <Label for="exampleTime">Time Available for Drop-by</Label>
                <span>
                    <Input
                        value={this.state.pickup_time_start}
                        onChange={this.handleInputChange}
                        type="time" name="pickup_time_start" id="exampleTime" placeholder="time available"  />
                </span>
                <span>Until
                    <Input 
                        value={this.state.pickup_time_end}
                        onChange={this.handleInputChange}
                        type="time" name="pickup_time_end" id="exampleTime" placeholder="time available" />
                </span>
                <Label for="exampleText">Additional Comments</Label>
                    <Input 
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        type="textarea" name="comment" id="exampleText" />
                <div className ="box-label-group">
                <br/>
                <Label check>
                    <Input type="checkbox" id="checkbox"/>{' '}
                </Label>
                <span id="ready">Ready for Available Harvest</span>
                <span>
                    <AddCropFormButton 
                    disabled={!(this.state.crop)}
                    handleFormSubmit={this.handleFormSubmit}/>
                </span>
                </div>
            </FormGroup>
            </div>

        );
    }
}

export default MyBounty;