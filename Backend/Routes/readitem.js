const express = require("express");
const router = express.Router();
const inventorydetails = require("../Models/Items");

router.get("/read", async (req, res) => {
// const mail=req.body.emailId
// console.log(mail)
 inventorydetails.find({},(err,result)=>{
    if(err)
    {
       res.send(err)
    }
    res.send(result)

 }) 
   
 });
 module.exports = router