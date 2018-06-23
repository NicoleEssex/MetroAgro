import {FormControl, FormGroup, ControlLabel, Checkbox, Button, } from "react-bootstrap";
import React from "react";

class AddCropForm extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
      }

      render() {
        return (
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Specific Crop</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="E.g. Raspberries"
                onChange={this.handleChange}
              />
                           <FormControl
                type="date"
                value={this.state.value}
                placeholder="Date your harvest will be available for pickup"
                onChange={this.handleChange}
              />
                           <FormControl
                type="date"
                value={this.state.value}
                placeholder="time of day you'd like people to gather your harvest"
                onChange={this.handleChange}
              />
                  <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        );
      }
}

export default AddCropForm;