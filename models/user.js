const mongoose = require("mongoose");

const user = mongoose.model("users", {
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = user;
