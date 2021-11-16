const mongoose=require("mongoose");



const items=new mongoose.Schema({
    Itemname:
    {
        type:String,
    },
    quantity:{
       type:Number,
    },
     emailId:{
        type:String,
     },
     storageplace:{
        type:String,
     },
    purchasedate:{
       type:Date,
    }


});
const itemlist=mongoose.model("items",items)
module.exports=itemlist