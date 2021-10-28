const express =require("express");
const mongoose =require("mongoose");
const app=express();

app.use(express.json());
const DB="mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/foodorg?retryWrites=true&w=majority";
mongoose.connect(DB,{

}).then(()=>{
    console.log("connection succesfull");
}).catch((err)=>console.log(`no connectionn`));
app.listen(3001,()=>{
    console.log("server is set")
});