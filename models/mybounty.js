const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mybountySchema = new Schema({
  crop: { type: String, required: true },
  date_availble: { type: Date, default: Date.now },
  pickup_time_start: {type: String, required: true },
  pickup_time_end: {type: String, required: true},
  comments: {type: String, required: false},
  available: {type: Boolean, default: false, required: true},
});

const MyBounty = mongoose.model("MyBounty", mybountySchema);

module.exports = MyBounty;