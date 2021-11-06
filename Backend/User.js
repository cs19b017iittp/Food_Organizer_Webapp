const mongoose=require("mongoose");
const details=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
     emailId: {
    type:String,
    required:true,
    },
    password:{
        type:Number,
        required:true,
    },

});
const User=mongoose.model("details",details)
module.exports=User