const express = require("express");

const router = express.Router();

const { sendOTP } = require("../controllers/otpController");
  

router.route("/send").post(sendOTP);

module.exports = router;
