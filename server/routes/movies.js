var express = require('express');
const {Movie} = require('../models/index');

var router = express.Router();

const movieRequestHandler = async (req, res, next) => {
  const movies = await Movie.find();
  res.send(movies);
}

router.get('/', movieRequestHandler);

module.exports = router;
