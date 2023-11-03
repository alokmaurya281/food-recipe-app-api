const asyncHandler = require("express-async-handler");
const nodemailer = require('nodemailer');

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



const sendHelpAndSupportMessage = asyncHandler(async (req, res)=>{
    const {email, name, problem} = req.body;
    if (!email && !name && !problem) {
      res.status(400);
      throw new Error("All Fields are required!");
    }  
    const mailOptions = {
      from: 'snmaurya10275@gmail.com',
      to: email, // The recipient's email address
      subject: 'Thank You For Contacting Us  :: Food Recipe App',
      text: `
      We have Recieved Your Message , we will reach out to You as soon as possible.
      
      Thank You.
      <b>Food Recipe App</b>
      
      `
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




module.exports = {
 
};
