const mongoose = require("mongoose");

const suggestFeatureSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the  name"],
    },
    email: {
      type: String,
      required: [true, "Please add the name"],
    },
    feature: {
      type: String,
      required: [true, "Please add the feature"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SuggestFeature", suggestFeatureSchema);
