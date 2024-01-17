const express = require("express");

const router = express.Router();

const { sendSupport} = require("../controllers/supportController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/support/send").post(sendSupport, validateToken);


module.exports = router;
