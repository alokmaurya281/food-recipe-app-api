const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the  name"],
    },
    email: {
      type: String,
      required: [true, "Please add the name"],
    },
    report: {
      type: String,
      required: [true, "Please add the report"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
