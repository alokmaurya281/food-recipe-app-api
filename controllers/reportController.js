const asyncHandler = require("express-async-handler");
const Report = require("../models/reportModel");
const nodemailer = require("nodemailer");


// Email configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    // secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
const sendReport = asyncHandler(async (req, res) => {
  const { name, email, report } = req.body;
  if (!email && !name && !report) {
    res.status(400);
    throw new Error("All Fields are required!");
  }

  const createReport = await Report.create({
    name,
    email,
    report,
  });
  if (createReport) {
    res.status(201).json({
      data: {
        _id: createReport.id,
        name: createReport.name,
        report: createReport.report,
        email: createReport.email,
      },
      message: "Report Sent Successfully",
    });
  } else {
    res.status(400);
    throw new Error("PLEASE TRY AGAIN!");
  }
});
module.exports = {
    sendReport,
  }
