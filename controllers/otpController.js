const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

// Generate a 6-digit OTP
const OTP = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-email-password' // Your Gmail email password
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com', // The recipient's email address
  subject: 'Your OTP Code',
  text: `Your OTP code is ${OTP}`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
