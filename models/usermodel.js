const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstname: {  type: String,  trim: true},
    lastname: {  type: String,  trim: true },
    email: {  type: String, unique: true,  trim: true },
    password: {  type: String,  trim: true },
    confirmpassword: {  type: String, trim: true },
    mobilenumber: {  type: String,  trim: true },
    role:            { type:String,required:true,trim:true}
})
const userModel = mongoose.model("Users",userSchema);
module.exports=userModel;