import { useState } from 'react';

function MovieSearch({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(title);
    setTitle('');
  };

  return (
    <div className='movie-search'>
      <h3>Search For a Movie</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Title:</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button-43' role='button'>
          Search!
        </button>
      </form>
    </div>
  );
}

export default MovieSearch;
