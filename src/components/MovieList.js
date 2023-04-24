import MovieShow from './MovieShow';

function MovieList({ movies, favorite }) {
  if (!Array.isArray(movies)) {
    return <div>No movies to display</div>;
  }
  const listMovies = movies.map((movie) => {
    return <MovieShow key={movie.id} movie={movie} favorite={favorite} />;
  });

  return <div>{listMovies}</div>;
}

export default MovieList;
