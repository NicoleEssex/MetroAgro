const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const harvestsSchema = new Schema({
  crop: { type: String, required: true },
  harvest_date: { type: Date, default: Date.now },
  pickup_time: {type: String, required: true },
  available_until: {type: String, required: true},
  comments: {type: String, required: false},
  available: {type: Boolean, default: false, required: true},
});

const Harvest = mongoose.model("Harvest", harvestsSchema);

module.exports = Harvest;