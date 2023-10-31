const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { json } = require('express');



// Generate a 4-digit OTP
const OTP = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, alphabets: false, digits: true,lowerCaseAlphabets: false });


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



const sendOTP = asyncHandler(async (req, res)=>{
  const {email} = req.body;
  if (!email) {
    res.status(400);
    throw new Error("All Fields are required!");
  }  
  const mailOptions = {
    from: 'snmaurya10275@gmail.com',
    to: email, // The recipient's email address
    subject: 'Your OTP Code to Verify email :: Food Recipe App',
    text: `Your OTP code is ${OTP}`
  };

  const user = await User.findOne({email});

  if (user) {
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

  

const verifyOTP = asyncHandler(async (req, res)=>{
  const {otp, email} = req.body;
  if (!otp && !email) {
    res.status(400);
    throw new Error("All Fields are required!");
  } 
  const user = await User.findOne({email});
  const prevOtp = user.otp;
  if (user) {
      if(prevOtp == otp){
      await User.findOneAndUpdate(
        {email},
        {otp: ''},
        {isConfirmed: true}
      ); 
      res.status(200).json({
        
        message: 'OTP verified Successfully'
      })
    }
    else{
      res.status(400);
      throw new Error("Invaild otp!");
    }
  }
  else{
    res.status(400);
    throw new Error("user not availbale !");
  }


});

module.exports = {
  sendOTP,verifyOTP
};

