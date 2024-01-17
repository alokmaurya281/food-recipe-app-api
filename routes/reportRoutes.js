const express = require("express");

const router = express.Router();

const { sendReport} = require("../controllers/reportController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/report/send").post(sendReport, validateToken);


module.exports = router;
