const express = require("express");
const user = require('../Models/User');
const router = express.Router();

// module.exports.notify = async(req,res)=>{
//     if(req.body){
//         user.findById(req.body.userid, (err,user0)=>{
//         })
//     }
// }

router.post('/notifications',async(req,res)=>{
    if(req.body.userid){
        user.findById(req.body.userid,(err,user)=>{
            if(err){
                res.json(err);
            }
            else{
                let notifications = user.notifications;
                let blank = [];
                user.notifications = blank;
                user.save();
                res.json(notifications);
            }
        })
    }
    else
        res.json("No user provided");
})

module.exports = router;