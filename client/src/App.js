import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import MovieList from './components/MovieList/MovieList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
