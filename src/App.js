import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get('http://localhost:3001/movies');
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);

  return (
    <div className='App'>
      <Header />
      <MovieSearch />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
