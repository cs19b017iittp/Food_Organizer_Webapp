const express = require("express");
const { where, $where } = require("../Models/Items");
const router = express.Router();
const inventorydetails = require("../Models/Items");

router.post("/insert", async (req, res) => {

   const item = new inventorydetails(req.body);
   // console.log(req.body)
   try {

      await item.save();
      // console.log(req.body)
      res.send("inserted data")


      console.log(item)
   } catch (err) {
      console.log(err);
   }
});

// router.get("/read", async (req, res) => {

//   inventorydetails.find({$where:{Itemname:}},)
//    // console.log(req.body)
//    try {

//       await item.save();
//       // console.log(req.body)
//       res.send("inserted data")


//       console.log(item)
//    } catch (err) {
//       console.log(err);
//    }
// });
module.exports = router