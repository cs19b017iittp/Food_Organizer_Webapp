const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userdetails = require("../Models/User");
const { where, $where } = require("../Models/User");

var mail;
// adding user from signup
router.post("/insert", async (req, res) => {
  try {
    const name = req.body.username;
    const mail = req.body.emailId;
    const phoneNum = req.body.phone;
    const gen = req.body.gender;
    const password = req.body.password;

    var exist = await userdetails.findOne({ emailId: mail });
    if (exist) {
      return res.status(400).send("user already exists");
    }
    const user = new userdetails({
      username: name,
      emailId: mail,
      phone: phoneNum,
      gender: gen,
      password: password,
    });
    await newUser.save();
    res.status(200).send("Registered sucessfully");
  } catch (err) {
    console.log(err);
    return res.status().send("Server Error");
  }
});

//getting mail from frontend

router.post("/getmailid", async (req, res) => {
  mail = req.body.emailId;
  console.log(mail);
  //   console.log(mail);
  //   res.send(mail);
});

//reading user specific data

router.get("/read", async (req, res) => {
  // console.log(mail)
  userdetails.find({ mail }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    //  console.log(result)
  });
});

module.exports = router;
