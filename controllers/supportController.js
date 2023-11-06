const asyncHandler = require("express-async-handler");
const Support = require("../models/supportModel");
const nodemailer = require("nodemailer");

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

const sendSupport = asyncHandler(async (req, res) => {
  const { name, email, problem } = req.body;
  if (!email && !name && !problem) {
    res.status(400);
    throw new Error("All Fields are required!");
  }

  const supportadd = await Support.create({
    name,
    email,
    problem,
  });
  if (supportadd) {
    res.status(201).json({
      data: {
        _id: supportadd.id,
        name: supportadd.name,
        email: supportadd.email,
        problem: supportadd.problem,
      },
      message: "Feature suggestion Sent Successfully",
    });
  } else {
    res.status(400);
    throw new Error("PLEASE TRY AGAIN!");
  }
});

module.exports = {
  sendSupport,
}
