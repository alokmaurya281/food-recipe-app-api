const express = require("express");

const router = express.Router();

const { sendOTP, verifyOTP } = require("../controllers/otpController");
  

router.route("/otp/send").post(sendOTP);
router.route("/otp/verify").post(verifyOTP);


module.exports = router;
