const express = require("express");

const router = express.Router();

const { sendOTP, verifyOTP } = require("../controllers/otpController");
  

router.route("/send").post(sendOTP);
router.route("/verify").post(verifyOTP);


module.exports = router;
