import React, {useState, useEffect} from "react";
import Movie from "../Movie/Movie.js"
import axios from "axios";

function showMovie(movie) {
  return (
    <Movie movie={movie} />
  );
}

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const result = await axios.get("http://localhost:9000/movies");
    setMovies(result.data);
  }

  useEffect(() => {fetchMovies()}, []);

  return (
    <div>
    {movies.map(showMovie)}
    </div>
  );
}

export default MovieList;
