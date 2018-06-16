const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const harvestsSchema = new Schema({
  crop: { type: String, required: true },
  harvest_date: { type: Date, default: Date.now },
  available: {type: Boolean, default: false, required: true},
  pickup_time: {type: Date, default: Date.now, required: true },
});

const Harvest = mongoose.model("Harvest", harvestsSchema);

module.exports = Harvest;