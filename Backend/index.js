const express =require("express");
const mongoose =require("mongoose");
const app=express();
const cors=require("cors");
const userdetails=require("./Models/User");
app.use(express.json());
app.use(cors());
const DB="mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(DB,{
useNewUrlParser:true,
}).then(()=>{
    console.log("connection succesfull");
}).catch((err)=>console.log(`no connectionn`));

app.post("/insert",async(req,res)=>{
    const name=req.body.username
    const mail=req.body.emailId
    const password=req.body.password
 const user=new userdetails({username:name,emailId:mail,password:password});
 try{

 await user.save();
 res.send("inserted data")


 console.log(user)
 }catch(err){
    console.log(err);
 }
});

app.put("/update",async(req,res)=>{
   const items=req.body
     
 try{
     
 await user.save();
 res.send("inserted data")


 console.log(user)
 }catch(err){
    console.log(err);
 }
});
// app.get("/",async(req,res)=>{
   
//  const user=new userdetails({username:"yethin",emailId:"cs19b026@iittp.ac.in",password:1234567});
//  try{
//  await user.save();
//  res.send("inserted data")


//  console.log(user)
//  }catch(err){
//     console.log(err);
//  }
// });
app.listen(3001,()=>{
    console.log("server is set")
});