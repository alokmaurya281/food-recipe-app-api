const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');



// Email configuration
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    // secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "snmaurya10275@gmail.com",
      pass: "VXUDmHkQYA2Gqjgx",
    },
  });
  

// Regsiter new user
// route POST /api/v1/user/register
//access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;
  if (!username && !email && !password && !name) {
    res.status(400);
    throw new Error("All Fields are required!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already registered!");
  }

  const usernameAvailable = await User.findOne({ username });
  if (usernameAvailable) {
    res.status(400);
    throw new Error("username not available!");
  }

  // Hashed Password
  const hashedPass = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    name,
    email,
    password: hashedPass,
  });

  if (user) {
    res.status(201).json({
      data: { _id: user.id, name:user.name, email: user.email, username: user.username },
      message: 'Registration Successful'
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }
});

// login  user
// route POST /api/v1/user/login
//access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields are required!");
  }
  const user = await User.findOne({ email });

  // compare pass with hashed pass
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
        user:{
            username: user.username,
            email: user.email,
            name: user.name,
            _id: user.id
        }
    }, process.env.JWT_SECRET_KEY,
    {expiresIn: '60 days'});
    res.status(200).json({ accessToken: accessToken });
  }
  else{
    res.status(400);
    throw new Error("Email or password is not vaild !");
  }
});

// reset password
// route /api/v1/user/forgotpassword
//accesspublic

const resetPass =  asyncHandler(async (req, res)=>{
    const {email, password} = req.body
    
    if(!email && !password){
        res.status(400);
        throw new Error("All fields required !");
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await user.findOne({email})
    if(!user){
        res.status(400);
     throw new Error("user not availbale!");
    }else{
        await User.findOneAndUpdate(
            {email},
            {password: hashedPass}
        );
        res.status(200).json({
            message: "Password Updated SuccessFully"
        })
    }
});

// forgot password
// route /api/v1/user/forgotpassword
//accesspublic
const OTP =  otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, alphabets: false, digits: true,lowerCaseAlphabets: false });

const forgotPass =  asyncHandler(async (req, res)=>{
    const {email} = req.body;
    if(!email){
        res.status(400);
        throw new Error("All fields required !");
    }
    const user = await User.findOne({email})
    const mailOptions = {
        from: 'snmaurya10275@gmail.com',
        to: email, // The recipient's email address
        subject: 'Your OTP Code to Verify email :: Food Recipe App',
        text: `Your OTP code is ${OTP}`
      };
    
    if(!user){
        res.status(400);
     throw new Error("user not availbale!");
    }
    else{
        await User.findOneAndUpdate(
            {email},
            {otp: OTP}
        );
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              throw new Error(error);
            }
            res.status(201).json({
            data: { otp: OTP },
            message: 'OTP sent Successfully'
          });
        });
        
    }
});


// get current user
// route get /api/v1/user/profile
//access private

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ data: req.user });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  resetPass,
  forgotPass
};
