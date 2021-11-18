const express =require("express");
const mongoose =require("mongoose");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const DB="mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/users?retryWrites=true&w=majority";

app.use("/user",require("./Routes/adduser"))
app.use("/item",require("./Routes/additems"))

mongoose.connect(DB,{
useNewUrlParser:true,
}).then(()=>{
    console.log("connection succesfull");
}).catch((err)=>console.log(`no connectionn`));



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