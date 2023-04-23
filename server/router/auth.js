const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")

router
.post("/signup",authController.createUsers)
.post("/login",authController.loginUser)

exports.router = router;