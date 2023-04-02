import "./MovieList.css";
import Movie from "../Movie/Movie.js";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"; 
import axios from "axios";

async function fetchMovies() {
  const result = await axios.get("http://localhost:9000/movies");
  return result.data;
}

function showMovie(movie) {
  return (
    <Movie movie={movie}/>
  )
}

function MovieList() {
  // State variables of the component
  const [movies, setMovies] = useState([]);
  const naviagte = useNavigate();

  // Should we route somewhere or or continue with this component?
  const token = localStorage.getItem("token");
  if(!token) {
    naviagte("/login");
  }

  // Handlers and post renderers.
  async function postRenderHandler() {
    const moviesFromServer = await fetchMovies();
    setMovies(moviesFromServer);
  }

  function postRenderHandlerNonAsync() {
    postRenderHandler();
  }

  // use efftect to be called post rendering
  useEffect(postRenderHandlerNonAsync, []);

  
  // Actual component
  return (
    <div className="MovieList">
    {movies.map(showMovie)}
    </div>
  );
}

export default MovieList;
