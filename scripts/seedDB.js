const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/urbanharvest",
  {
    useMongoClient: true
  }
);

const cropSeed = [
  {
    name: "fruit",
    dataAvailable: "Today",
    date: new Date(Date.now()),
    time: "12:00",
    timeAvailable: "12:00",
    available: true
  },
  {
    name: "veggies",
    dataAvailable: "Today",
    date: new Date(Date.now()),
    time: "12:00",
    timeAvailable: "12:00",
    available: true
  },
  {
    name: "herbs",
    dataAvailable: "Today",
    date: new Date(Date.now()),
    time: "12:00",
    timeAvailable: "12:00",
    available: true
  }
];

db.Crop.remove({})
  .then(() => db.Crop.collection.insertMany(cropSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
