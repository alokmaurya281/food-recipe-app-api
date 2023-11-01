const express = require("express");

const router = express.Router();
const {
    registerUser,
    loginUser,
    currentUser,
    resetPass,
    forgotPass,
    accountVerify,
    socialSignin
  } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/resetpass").post(resetPass);
router.route("/forgotpass").post(forgotPass);
router.route("/accountverify").post(accountVerify);
router.route("/social-signin").post(socialSignin);
router.route("/profile").get(validateToken, currentUser);



module.exports = router;
