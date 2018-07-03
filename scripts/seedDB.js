const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/metroagro",
    // {
    //     useMongoClient: true
    // }
);

const mybountySeed = [
    {
        crop: "Strawberries",
        date_available: new Date(Date.now()),
        pickup_time_start: "12:00pm",
        pickup_time_end: "8:00pm",
        comments: "Like, 20 lbs of cherries available. First come, first serve.",
        available: false
    },
    {
        crop: "Apples",
        date_available: new Date(Date.now()),
        pickup_time_start: "11:00am",
        pickup_time_end: "10:00pm",
        comments: "Buckets of apples",
        available: false
    }
];

db.MyBounty
  .remove({})

  .then(() => db.MyBounty.collection.insertMany(mybountySeed))

  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);

  });
