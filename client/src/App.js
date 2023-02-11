import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList/MovieList.js";

function App() {
  return (
    <div className="App">
      <h1>Movie rating website</h1>
      <MovieList />
    </div>
  );
}

export default App;
