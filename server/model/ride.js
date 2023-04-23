const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  name: String,
  carNumber: String,
  destination: String,
  pickup: String,
  date: String,
})

exports.Ride = mongoose.model("Ride", rideSchema);
