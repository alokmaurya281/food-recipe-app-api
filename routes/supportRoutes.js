const express = require("express");

const router = express.Router();

const { sendSupport} = require("../controllers/supportController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/send").post(sendSupport, validateToken);


module.exports = router;
