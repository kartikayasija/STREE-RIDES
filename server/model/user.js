const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
  firstName:{
    type: String,
    // required: true,
  },
  lastName:String,
  email:{
    type: String,
    unique: true,
    required: true,
  },
  password:{
    type: String,
    required: true
  },
  token: String
})
exports.User = mongoose.model("User",userSchema);