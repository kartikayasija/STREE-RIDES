const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  carNumber: String,
  destination: String,
  pickup: String,
  date: String,
  time:String,
  charges:Number,
})

exports.Ride = mongoose.model("Ride", rideSchema);
