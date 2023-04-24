import github from '../images/github-mark.png';

function Header() {
  return (
    <div className='headear'>
      <h1>Movies</h1>
      <a href='https://github.com/IvanRoussev/ExploreMovies' target='_blank'>
        <img src={github} />
      </a>
    </div>
  );
}

export default Header;
