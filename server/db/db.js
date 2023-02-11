const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connect("mongodb+srv://abhishekkumawat23:abhishek23@cluster0.kkefvxj.mongodb.net/test");
}

module.exports = { connectDb };
