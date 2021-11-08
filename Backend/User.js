const mongoose=require("mongoose");

const reqstring={
    type:String,
    required:true,
}
const reqnumber={
    type:Number,
    required:true,
}
const str={
    type:String,
}

const item=new mongoose.Schema({
    id:{
      type:String
    },
    item_name:reqstring,
    place:reqstring,
});

const details=new mongoose.Schema({
    username:reqstring,
     emailId:reqstring,
    password:reqnumber,
    inventorylist:[item],

});
const User=mongoose.model("details",details)
module.exports=User