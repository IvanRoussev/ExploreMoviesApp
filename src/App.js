import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import FavoriteList from './components/FavouriteList';
import Genres from './components/Genre';

function App() {
  const [movies, setMovies] = useState([]);

  const [favorite, setFavorite] = useState([]);
  // console.log(favorite);

  const fetchMovies = async () => {
    const response = await axios.get('http://localhost:3001/movies');
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovies();
    // console.log(movies);
  }, []);

  const searchBooks = async (title) => {
    const response = await axios.get(
      `http://localhost:3001/movies?title=${title}`
    );
    setMovies(response.data);
  };

  const createFavorite = (favoriteMovie) => {
    if (favorite.includes(favoriteMovie) === false) {
      const updatedfavorites = [...favorite, favoriteMovie];
      setFavorite(updatedfavorites);
    } else {
      alert(`Movie ${favoriteMovie.title} already in favourites`);
    }
  };

  const removeFavorite = (removedFavoriteIndex) => {
    const removedFavorites = favorite.filter((fav) => {
      return fav.id !== removedFavoriteIndex;
    });
    setFavorite(removedFavorites);
  };

  const moviesByGenre = async (genre) => {
    const response = await axios.get(
      `http://localhost:3001/movies?genres=${genre}`
    );
    console.log(response.data);
    setMovies(response.data);
  };

  return (
    <div className='App'>
      <Header />
      <MovieSearch onSearch={searchBooks} />
      <FavoriteList favorites={favorite} removeFavorite={removeFavorite} />
      <Genres onGenre={moviesByGenre} onAll={fetchMovies} />
      <MovieList movies={movies} favorite={createFavorite} />
    </div>
  );
}

export default App;
