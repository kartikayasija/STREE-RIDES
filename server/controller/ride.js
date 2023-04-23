const express = require("express");
const mongoose = require("mongoose");
const model = require("../model/ride");

exports.getRides=async(req,res)=>{
  const rides = await model.Ride.find({});
  res.json(rides);
}

exports.createRide = async(req,res)=>{
  const newRide = new model.Ride({ userId: req.user.id, ...req.body });
  newRide.save().then(()=>{
    res.status(200).json({
      message: 'Ride created successfully',
      ride: newRide
    })
  }).catch((err)=>{
    res.status(400).json({
      message: 'Failed to create Ride',
      error: err
    });
    console.log(err)
  })
}

exports.getOneRide = async (req, res) => {
  try {
    const ride = await model.Ride.findById(req.params.id);
    if (!ride) {
      res.status(404).json({ message: 'Ride not found' });
    } else {
      res.status(200).json(ride);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.fetchRides = async (req, res) => {

  try {
    const rides = await model.Ride.find({ pickup: req.body.pickup, destination: req.body.destination });
    if (rides.length === 0) {
      res.status(404).json({ message: 'Ride not found' });
    } else {
      res.status(200).json(rides);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
