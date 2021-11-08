const mongoose=require("mongoose");



const items=new mongoose.Schema({
    Itemname:
    {
        type:String,
        required:true, 
    },
     emailId:{
        type:String,
     },
     storageplace:{
        type:String,
    required:true,
     },


});
const itemlist=mongoose.model("items",items)
module.exports=itemlist