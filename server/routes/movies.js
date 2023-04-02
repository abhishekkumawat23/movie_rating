var express = require('express');
var router = express.Router();
const Movie = require('../models/Movie')

/* GET movies listing. */
async function movieRequestHandler(req, res, next) {
  const movies = await Movie.find();
  res.send(movies);
}

router.get('/', movieRequestHandler);

module.exports = router;
