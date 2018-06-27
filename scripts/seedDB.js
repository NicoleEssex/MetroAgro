const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/urbangarden",
    // {
    //     useMongoClient: true
    // }
);

const harvestSeed = [
    {
        crop: "Cherries",
        harvest_date: new Date(Date.now()),
        pickup_time: "12:00pm",
        available_until: "8:00pm",
        comments: "Like, 20 lbs of cherries available. First come, first serve.",
        available: false
    },
    {
        crop: "Raspberries",
        harvest_date: new Date(Date.now()),
        pickup_time: "11:00am",
        available_until: "10:00pm",
        comments: "So many raspberries",
        available: false
    }
];

db.Harvest
  .remove({})
  .then(() => db.Harvest.collection.insertMany(harvestSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });