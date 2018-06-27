import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AddCropFormButton.css"
import Reactstrap from "reactstrap"




const AddCropFormButton = () => (
  <Link to="api/harvest">
        <Button className="acfb" type="submit" onClick={this.toggle}>Add a Crop</Button>
  </Link>
);

export default AddCropFormButton;

