var express = require('express');
const { getMovies } = require('../movies');

var router = express.Router();

const movieRequestHandler = (req, res, next) => {
  const movies = getMovies();
  res.send(movies);
}

/* GET users listing. */
router.get('/', movieRequestHandler);

module.exports = router;
