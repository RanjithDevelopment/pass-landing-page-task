require("dotenv").config();
const express=require("express");
const cors =require('cors');
const db = require("./connect.js");
const register = require("./Routers/registerrouter.js")
const Auth = require("./Modules/Authmodule.js");
const userRouter= require("./Routers/userRouter.js");
// const dotenv=require("dotenv");
// dotenv.config();
const app=express();
 //database
 db();


app.use(cors());
app.use(express.json());

app.use('/api/register',register);
//app.use('/',Auth.AuthenticateUser);
app.use('/api/users',userRouter);

app.listen(process.env.PORT,()=>{console.log("app is Listening ");});
