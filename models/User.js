// import { isEmail } from 'validator'
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {type: String, required: true}, 
    // validate: [isEmail, "invalid email"]},
  password: {type: String, required: true},
  phone: {type: String, required: [true, "Please enter a valid phone number to register"], validate: {
    validator: (v) => {
      return /\d{3}-\d{3}-\d{4}/.test(v);
    },
    message: '{VALUE} is not a valid phone number'
  }},
  address: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
