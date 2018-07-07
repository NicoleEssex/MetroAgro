import React, { Component } from "react";
import { ListGroup, Jumbotron,FormGroup, Label, Input, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import WebFont from "webfontloader";
import HomeButton from "../../buttons/HomeButton/";
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
        street_address:"",
        city:"",
        state:"",
        comments:""
      };

    componentDidMount() {
        this.loadMyBounty();
        // this.setCardImage();
    }

    loadMyBounty = () => {
        API.getMyBounty()
          .then(res =>
            this.setState({ my_bounty: res.data, crop: "", date_available: "", pickup_time_start:"", pickup_time_end: "", street_address:"", city:"", state:"", comments:"" })
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

    // setCardImage = event => {
    //     let prop = event.target.innerHTML;
    //     this.setState ({
    //         image: imagesObject[prop]
    //     });
    // }
    

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
                street_address: this.state.street_address,
                city: this.state.city,
                state: this.state.state_ab,
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
                        <CardImg top width="100%" src={imagesObject[my_bounty.crop.toLowerCase()]}>
                        </CardImg>
                        <CardBody>
                            <CardTitle className="card-title">{my_bounty.crop}</CardTitle>
                            <CardText className="card-text">{my_bounty.date_available}</CardText>
                            <CardText className="card-text">From: {my_bounty.pickup_time_start}, Until: {my_bounty.pickup_time_end}</CardText>
                            <CardText>Additional Comments:{my_bounty.comments}</CardText>
                            <DeleteBtn className="delete-button" onClick={() => this.deleteBounty(my_bounty._id)}/>
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
                        type="select" name="crop" id="exampleSelect">
                        <option>Select One</option>
                        <option>Apples</option>
                        <option>Apricot</option>
                        <option>Arugula</option>
                        <option>Asparagus</option>
                        <option>Beans</option>
                        <option>Beets</option>
                        <option>Blackberries</option>
                        <option>Broccoli</option>
                        <option>Cabbage</option>
                        <option>Cantaloupe</option>
                        <option>Carrots</option>
                        <option>Cauliflower</option>
                        <option>Chard</option>
                        <option>Cherries</option>
                        <option>Cilantro</option>
                        <option>Chile Pepper</option>
                        <option>Chive</option>
                        <option>Corn</option>
                        <option>Cucumber</option>
                        <option>Currant</option>
                        <option>Dairy</option>
                        <option>Dill</option>
                        <option>Eggs</option>
                        <option>Eggplant</option>
                        <option>Figs</option>
                        <option>Flowers</option>
                        <option>Garlic</option>
                        <option>Grapes</option>
                        <option>Honey</option>
                        <option>Honeydew</option>
                        <option>Kale</option>
                        <option>Lavender</option>
                        <option>Lettuce</option>
                        <option>Meat</option>
                        <option>Mint</option>
                        <option>Nectarines</option>
                        <option>Nuts</option>
                        <option>Onions</option>
                        <option>Oregano</option>
                        <option>Parsley</option>
                        <option>Peas</option>
                        <option>Plums</option>
                        <option>Potatoes</option>
                        <option>Pumpkins</option>
                        <option>Radishes</option>
                        <option>Raspberries</option>
                        <option>Rhubarbs</option>
                        <option>Rhubarb</option>
                        <option>Rosemary</option>
                        <option>Sage</option>
                        <option>Spinach</option>
                        <option>Strawberries</option>
                        <option>Summer Squash</option>
                        <option>Sweet Pepper</option>
                        <option>Sweet Potatoe</option>
                        <option>Thyme</option>
                        <option>Tomatoes</option>
                        <option>Turnips</option>
                        <option>Watermelon</option>
                        <option>Winter Squash</option>
                        <option>Zucchini</option>

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
                <Label for="streetAddress"> Street Address </Label>
                    <Input
                        value={this.state.street_address}
                        onChange={this.handleInputChange}
                        type="input" name="address" id="streetAddress" placeholder="Street Address" />
                <Label for="streetAddress"> City </Label>
                    <Input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        type="input" name="city" id="city" placeholder="City" />
                <Label for="stateSelect"> State </Label>
                    <Input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        type="select" name="state_ab" id="stateAb" placeholder="State">
							<option value>All</option>
							<option value="AK">AK</option>
							<option value="AL">AL</option>
							<option value="AR">AR</option>
							<option value="AZ">AZ</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DC">DC</option>
							<option value="DE">DE</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="IA">IA</option>
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="MA">MA</option>
							<option value="MD">MD</option>
							<option value="ME">ME</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MO">MO</option>
							<option value="MS">MS</option>
							<option value="MT">MT</option>
							<option value="NC">NC</option>
							<option value="ND">ND</option>
							<option value="NE">NE</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NV</option>
							<option value="NY">NY</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="PR">PR</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VA">VA</option>
							<option value="VI">VI</option>
							<option value="VT">VT</option>
							<option value="WA">WA</option>
							<option value="WI">WI</option>
							<option value="WV">WV</option>
							<option value="WY">WY</option>
                    </Input>        
                
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