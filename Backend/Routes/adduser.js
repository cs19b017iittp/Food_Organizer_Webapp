const express = require("express");
const router = express.Router();
const userdetails = require("../Models/User");
const { where, $where } = require("../Models/User");

var mail;

router.post("/insert", async (req, res) => {
  const name = req.body.username;
  const mail = req.body.emailId;
  const phoneNum = req.body.phone;
  const gen = req.body.gender;
  const password = req.body.password;
  const user = new userdetails({
    username: name,
    emailId: mail,
    phone: phoneNum,
    gender: gen,
    password: password,
  });
  try {
    await user.save();
    res.send("inserted data");

    console.log(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/getmailid", async (req, res) => {
  mail = req.body.emailId;
  console.log(mail);
  //   console.log(mail);
  //   res.send(mail);
});

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

// //login route

// router.post("/signin", async (req, res) => {
//   try {
//     const { emailId, password } = req.body;
//     if (!emailId || !password) {
//       return res.status(400).json({ error: "please fill the details" });
//     }

//     const userLogin = await user.findOne({ email: emailId });

//     if (!userLogin) {
//       res.json({ error: "user not der " });
//     } else {
//       res.json({ message: "user signin sucessfull" });
//     }
//   } catch (err) {}
// });
module.exports = router;
