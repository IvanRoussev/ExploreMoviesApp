import star from '../images/star.png';

function MovieShow({ movie, favorite }) {
  const favourite = () => {
    favorite(movie);
  };

  const getGenres = movie.genres.map((genre, index) => {
    return <li key={index}>{genre}</li>;
  });

  const listcast = movie.cast.map((person, index) => {
    return (
      <li key={index}>
        <a href={`https://en.wikipedia.org/wiki/${person}`} target='_blank'>
          {person}
        </a>
      </li>
    );
  });

  return (
    <div className='each-movie'>
      <img className='star' src={star} alt='image' onClick={favourite} />
      <h2>{movie.title}</h2>
      <h2>Released: {movie.year}</h2>
      <img src={movie.thumbnail} />
      <h3>Genres</h3>
      <div className='genres'>
        <ul className='genre-list'>{getGenres}</ul>
      </div>
      <div className='description'>
        <h3>About</h3>
        <p>{movie.extract}</p>
      </div>
      <div className='cast'>
        <h3>CAST</h3>
        <ul className='cast-list'>{listcast}</ul>
      </div>
    </div>
  );
}
export default MovieShow;
