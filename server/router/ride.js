const express = require("express");
const rideController = require("../controller/ride");
const router = express.Router();

router
  .get("/",rideController.getRides)
  .post("/",rideController.createRide)
  .get("/:id",rideController.getOneRide)
  .post("/fetch",rideController.fetchRides)

exports.router=router;