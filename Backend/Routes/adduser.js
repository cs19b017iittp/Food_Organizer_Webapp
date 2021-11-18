const express=require("express");
const router=express.Router();
const userdetails=require("../Models/User")



router.post("/insert",async(req,res)=>{
    const name=req.body.username
    const mail=req.body.emailId
    const phoneNum = req.body.phone
    const password=req.body.password
 const user=new userdetails({username:name,emailId:mail,phone:phoneNum,password:password});
 try{

 await user.save();
 res.send("inserted data")


 console.log(user)
 }catch(err){
    console.log(err);
 }
});
module.exports=router 