const Mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  Mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((e) => {
      console.log("DB not connected successfully");
      console.log(e);
    });
};
