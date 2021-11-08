const express=require("express");
const router=express.Router();
const inventorydetails=require("../Models/Items");

router.post("",async(req,res)=>{
  
    const item=new inventorydetails(req.body);
    // console.log(req.body)
    try{
    
    await item.save();
    // console.log(req.body)
    res.send("inserted data")
    
    
    console.log(item)
    }catch(err){
       console.log(err);
    }
    });
   module.exports=router 