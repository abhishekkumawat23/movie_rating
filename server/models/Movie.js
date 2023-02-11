const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  title: String,
  image: String,
  rating: Number,
});

const movieModel = mongoose.model("Movie", movieSchema);
module.exports = movieModel;
