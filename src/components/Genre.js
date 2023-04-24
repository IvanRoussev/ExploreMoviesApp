function Genres({ onGenre }) {
  const comedy = (event) => {
    onGenre('Comedy');
  };
  const romance = (event) => {
    onGenre('Romance');
  };
  const drama = (event) => {
    onGenre('Drama');
  };
  const action = (event) => {
    onGenre('Action');
  };
  const documentary = (event) => {
    onGenre('Documentary');
  };
  const western = (event) => {
    onGenre('Western');
  };
  const spy = (event) => {
    onGenre('Spy');
  };
  const crime = (event) => {
    onGenre('Crime');
  };
  const horror = (event) => {
    onGenre('Horror');
  };
  const family = (event) => {
    onGenre('Family');
  };
  const fantasy = (event) => {
    onGenre('Fantasy');
  };
  const biography = (event) => {
    onGenre('Biography');
  };
  const historical = (event) => {
    onGenre('Historical');
  };
  const war = (event) => {
    onGenre('War');
  };
  const animated = (event) => {
    onGenre('Animated');
  };
  const superhero = (event) => {
    onGenre('Superhero');
  };
  const political = (event) => {
    onGenre('Political');
  };
  const noir = (event) => {};
  const independent = (event) => {
    onGenre('Noir');
  };

  return (
    <>
      <h3>View By Genre</h3>
      <div className='genres'>
        <button className='genre-button' onClick={comedy}>
          Comedy
        </button>
        <button className='genre-button' onClick={romance}>
          Romance
        </button>
        <button className='genre-button' onClick={drama}>
          Drama
        </button>
        <button className='genre-button' onClick={action}>
          Action
        </button>
        <button className='genre-button' onClick={documentary}>
          Documentary
        </button>
        <button className='genre-button' onClick={western}>
          Western
        </button>
        <button className='genre-button' onClick={spy}>
          Spy
        </button>
        <button className='genre-button' onClick={crime}>
          Crime
        </button>
        <button className='genre-button' onClick={horror}>
          Horror
        </button>
        <button className='genre-button' onClick={family}>
          Family
        </button>
        <button className='genre-button' onClick={fantasy}>
          Fantasy
        </button>
        <button className='genre-button' onClick={biography}>
          Biography
        </button>
        <button className='genre-button' onClick={historical}>
          Historical
        </button>
        <button className='genre-button' onClick={war}>
          War
        </button>
        <button className='genre-button' onClick={animated}>
          Animated
        </button>
        <button className='genre-button' onClick={superhero}>
          Superhero
        </button>
        <button className='genre-button' onClick={political}>
          Political
        </button>
        <button className='genre-button' onClick={noir}>
          Noir
        </button>
        <button className='genre-button' onClick={independent}>
          Independent
        </button>
      </div>
    </>
  );
}

export default Genres;
