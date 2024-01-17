const express = require("express");

const router = express.Router();
const {
    registerUser,
    loginUser,
    currentUser,
    resetPass,
    forgotPass,
    accountVerify,
    socialSignin,
    userProfileByEmail,
    updateProfile
  } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
  

router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
router.route("/user/resetpass").post(resetPass);
router.route("/user/forgotpass").post(forgotPass);
router.route("/user/accountverify").post(accountVerify);
router.route("/user/social-signin").post(socialSignin);
router.route("/user/profile").get(validateToken, currentUser);
router.route("/user/profile-by-email").get(validateToken, userProfileByEmail);
router.route("/user/updateprofile").put(validateToken, updateProfile);




module.exports = router;
