const express=require("express");
const router=express.Router();
const userdetails=require("../Models/User")



router.post("",async(req,res)=>{
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
module.exports=router 