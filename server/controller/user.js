const express = require("express");
const mongoose = require("mongoose");
const model = require("../model/user");



exports.getUsers = async (req, res) => {
  try {
    const allUsers = await model.User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error occurred while retrieving users",
      error: error.message
    });
  }
};

exports.getOneUser = async(req,res)=>{
  try {
    const foundUser = await model.User.findById(req.params.id);
    if (!foundUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(foundUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}