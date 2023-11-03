const mongoose = require("mongoose");

const supportSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the  name"],
    },
    email: {
      type: String,
      required: [true, "Please add the name"],
    },
    problem: {
      type: String,
      required: [true, "Please add the issue"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Support", supportSchema);
