import React from "react";
import Movie from "../Movie/Movie.js"

function showMovie(movie) {
  return (
    <Movie movie={movie} />
  );
}

const MovieList = ({movies}) => {
  return (
    <div>
    {movies.map(showMovie)}
    </div>
  );
}

export default MovieList;
