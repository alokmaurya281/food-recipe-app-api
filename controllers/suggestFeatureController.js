const asyncHandler = require("express-async-handler");
const SuggestFeature = require("../models/suggestFeatureModel");
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
const sendSuggestFeatures = asyncHandler(async (req, res) => {
  const { name, email, feature } = req.body;
  if (!email && !name && !feature) {
    res.status(400);
    throw new Error("All Fields are required!");
  }

  const featureAdd = await SuggestFeature.create({
    name,
    email,
    feature,
  });
  if (featureAdd) {
    res.status(201).json({
      data: {
        _id: featureAdd.id,
        name: featureAdd.name,
        email: featureAdd.email,
        feature: featureAdd.feature,
      },
      message: "Feature suggestion Sent Successfully",
    });
  } else {
    res.status(400);
    throw new Error("PLEASE TRY AGAIN!");
  }
});
module.exports = {
    sendSuggestFeatures,
  }
