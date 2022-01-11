const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // parcels: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Parcel",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
