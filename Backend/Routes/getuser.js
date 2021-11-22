const express = require("express");
const router = express.Router();
const userdetails = require("../Models/User");

//login route

router.post("/signin", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(400).json({ error: "please fill the details" });
    }

    const userLogin = await user.findOne({ email: emailId });

    if (!userLogin) {
      res.json({ error: "user not der " });
    } else {
      res.json({ message: "user signin sucessfull" });
    }
  } catch (err) {}
});
module.exports = router;
