import { useState } from 'react';

function MovieSearch() {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preveDefault();
    // setTitle('');
  };
  return (
    <div className='movie-search'>
      <h3>Search For a Movie</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Search!</button>
      </form>
    </div>
  );
}

export default MovieSearch;
