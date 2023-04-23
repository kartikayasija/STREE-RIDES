require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rides = require("./router/ride")
const users = require("./router/user")
const authRouter = require("./router/auth");
const authMiddleware = require("./middleware/auth");
const auth = authMiddleware.auth;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("DataBase Connected");
}).catch((err)=>{
  console.log(err);
})
app.use(cors());
app.use("/rides",auth,rides.router);
app.use("/user",auth,users.router);
app.use("/auth",authRouter.router);

app.get("/",(req,res)=>{
  res.send("Server Running")
})

app.listen(process.env.PORT,()=>{
  console.log("Server Started")
})