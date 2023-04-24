function Genres({ onGenre, onAll }) {
  const all = () => {
    onAll();
  };

  const comedy = () => {
    onGenre('Comedy');
  };
  const romance = () => {
    onGenre('Romance');
  };
  const drama = () => {
    onGenre('Drama');
  };
  const action = () => {
    onGenre('Action');
  };
  const documentary = () => {
    onGenre('Documentary');
  };
  const western = () => {
    onGenre('Western');
  };
  const spy = () => {
    onGenre('Spy');
  };
  const crime = () => {
    onGenre('Crime');
  };
  const horror = () => {
    onGenre('Horror');
  };
  const family = () => {
    onGenre('Family');
  };
  const fantasy = () => {
    onGenre('Fantasy');
  };
  const biography = () => {
    onGenre('Biography');
  };
  const historical = () => {
    onGenre('Historical');
  };
  const war = () => {
    onGenre('War');
  };
  const animated = () => {
    onGenre('Animated');
  };
  const superhero = () => {
    onGenre('Superhero');
  };
  const political = () => {
    onGenre('Political');
  };
  const noir = () => {
    onGenre('noir');
  };
  const independent = () => {
    onGenre('independent');
  };

  return (
    <>
      <h3>View By Genre</h3>
      <div className='genres'>
        <button className='genre-button' onClick={all}>
          All
        </button>
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
