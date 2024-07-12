const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    secondname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    iin: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
