const express = require('express');
const usermodule = require("../Modules/usermodule.js")
const Auth = require("../Modules/Authmodule.js");
const router=express.Router();
router.post('/get',usermodule.getUserData);
router.post('/delete/:id',usermodule.deleteuserdata);
module.exports=router;