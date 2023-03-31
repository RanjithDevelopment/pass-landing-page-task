const express = require('express');
const usermodule = require("../Modules/usermodule.js")
const Auth = require("../Modules/Authmodule.js");
const router=express.Router();
router.get('/get',Auth.authorizeAdmin,usermodule.getUserData);
router.delete('/delete/:id',Auth.authorizeAdmin,usermodule.deleteuserdata);
module.exports=router;