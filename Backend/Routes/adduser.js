const express=require("express");
const router=express.Router();
const userdetails=require("../Models/User");
const { where, $where } = require("../Models/User");

var mail

router.post("/insert",async(req,res)=>{
    const name=req.body.username
    const mail=req.body.emailId
    const phoneNum = req.body.phone
    const gen = req.body.gender
    const password=req.body.password
 const user=new userdetails({username:name,emailId:mail,phone:phoneNum,gender:gen,password:password});
 try{

 await user.save();
 res.send("inserted data")


 console.log(user)
 }catch(err){
    console.log(err);
 }
});

 router.post("/getmailid",async(req,res)=>{
    mail=req.body.emailId
    console.log(mail)
});

router.get("/read", async (req, res) => {
// console.log(mail)
 userdetails.find({},(err,result)=>{
    if(err)
    {
       res.send(err)
    }
    res.send(result);
   //  console.log(result)

 }) 
   
 });
module.exports=router 