const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router
  .get("/",userController.getUsers)
  .get("/:id",userController.getOneUser)

exports.router=router;