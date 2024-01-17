const express = require("express");

const router = express.Router();

const { sendSuggestFeatures} = require("../controllers/suggestFeatureController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/suggestfeature/send").post(sendSuggestFeatures, validateToken);


module.exports = router;
