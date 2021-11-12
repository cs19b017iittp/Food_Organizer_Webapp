const mongoose=require("mongoose");



const items=new mongoose.Schema({
    Itemname:
    {
        type:String,
    },
     emailId:{
        type:String,
     },
     storageplace:{
        type:String,
     },
    


});
const itemlist=mongoose.model("items",items)
module.exports=itemlist