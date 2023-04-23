import MovieShow from './MovieShow';

function MovieList({ movies }) {
  if (!Array.isArray(movies)) {
    return <div>No movies to display</div>;
  }
  const listMovies = movies.map((movie) => {
    return <MovieShow key={movie.id} movie={movie} />;
  });

  return <div>{listMovies}</div>;
}

export default MovieList;
