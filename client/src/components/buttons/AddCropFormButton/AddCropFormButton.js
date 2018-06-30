import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AddCropFormButton.css"
// import Reactstrap from "reactstrap"




const AddCropFormButton = (props) => (
  <div>
        <Button className="acfb" type="submit" onClick={props.handleFormSubmit}>Add a Crop</Button>
  </div>
);

export default AddCropFormButton;

