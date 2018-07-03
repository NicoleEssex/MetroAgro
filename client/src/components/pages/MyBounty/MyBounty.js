import React, { Component } from "react";
import { ListGroup, ListGroupItem,Jumbotron,FormGroup, Label, Input, FormFeedback, FormText, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import WebFont from "webfontloader";
import HomeButton from "../../buttons/HomeButton/";
import App from "../../../App";
// import HarvestModal from "../../Modal/HarvestModal";
import AddCropFormButton from "../../buttons/AddCropFormButton";
import "./MyBounty.css";
import API from "../../../utils/API";
import DeleteBtn from "../../buttons/DeleteBtn/DeleteBtn";
import { Link } from "react-router-dom";
import imagesObject from "../../ImagesObject/ImagesObject";


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
        comments:""
      };

    componentDidMount() {
        this.loadMyBounty();
    }

    loadMyBounty = () => {
        API.getMyBounty()
          .then(res =>
            this.setState({ my_bounty: res.data, crop: "", date_available: "", pickup_time_start:"", pickup_time_end: "", comments:"" })
          )
          .catch(err => console.log(err));
      };
 
    deleteBounty = id => {
        console.log("I'm running a fun-ction");
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

    setCardImage = event => {
        let prop = event.target.innerHTML;
        this.setState({imagesObject:[prop]})
    }

    handleFormSubmit = event => {
        // console.log("handleFormSubmit hit")
        event.preventDefault();
        console.log(this.state);
        if (this.state.crop) {
            API.saveMyBounty({
                crop: this.state.crop,
                date_available: this.state.date_available,
                pickup_time_start: this.state.pickup_time_start,
                pickup_time_end: this.state.pickup_time_end,
                comments: this.state.comments

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
                    {this.state.my_bounty.length ? (    
                    <ListGroup >
                    {this.state.my_bounty.map(my_bounty => (
                    <Card className="card-display" key={my_bounty._id}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap">
                        </CardImg>
                        <CardBody>
                            <CardTitle className="card-title">{my_bounty.crop}</CardTitle>
                            <CardText className="card-text">{my_bounty.date_available}</CardText>
                            <CardText className="card-text">From: {my_bounty.pickup_time_start}, Until: {my_bounty.pickup_time_end}</CardText>
                            <CardText>Additional Comments:{my_bounty.comments}</CardText>
                            <DeleteBtn className="delete-button" onClick={() => this.deleteMyBounty(my_bounty._id)}/>
                        </CardBody>
                    </Card>
                    ))}
                    </ListGroup>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
                      </div>
                  </Jumbotron>    
              
              {/* <ListGroup>
                {this.state.my_bounty.map(my_bounty => (
                  <ListGroupItem key={my_bounty._id}>
                    <Link to={"/mybounty/" + my_bounty._id}>
                      <strong>
                        {my_bounty.crop}<br/>
                        Available on: {my_bounty.date_available}<br/>
                        From: {my_bounty.pickup_time_start},  Until: {my_bounty.pickup_time_end} <br/>
                        Additional Comments:{my_bounty.comments}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBounty(my_bounty._id)} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
                </div> */}
            {/* </Jumbotron> */}
 
            <FormGroup className="mbFormGroup">
           
            {/* <Label for="userName">User Name</Label>
            <Input valid />
            <FormFeedback>Dagnabbit! that name is already taken</FormFeedback>
            <FormText>Please create a user name that will be associated with your crops.</FormText> */}
       
                <Label  for="exampleSelect">Category of Harvest</Label>
                    <Input
                        value={this.state.crop}
                        onChange={this.handleInputChange} 
                        type="select"    name="crop"  id="exampleSelect">
                        <option>Select One</option>
                        <option>Apples</option>
                        <option>Beans</option>
                        <option>Peppers</option>
                        <option>Tomato</option>
                        <option>Squash</option>

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
                        value={this.state.comments}
                        onChange={this.handleInputChange}
                        type="textarea" name="comments" id="exampleText" />
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