import "./MovieList.css";
import Movie from "../Movie/Movie.js";
// import axios from "axios";

// async function fetchMovies() {
//   const result = await axios.get("http://localhost:9000/movies");
//   return result.data;
// }

function showMovie(movie) {
  return (
    <Movie movie={movie}/>
  )
}

// async function MovieList() {
//   const movies = await fetchMovies();
//   return (
//     <div className="MovieList">
//     {movies.map(showMovie)}
//     </div>
//   );
// }

async function MovieList() {
  const movies = [];
  return (
    <div className="MovieList">
    {movies.map(showMovie)}
    </div>
  );
}

export default MovieList;
