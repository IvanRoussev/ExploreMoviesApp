import github from '../imgs/github-mark.png';

function Header() {
  return (
    <div className='headear'>
      <h1>Movies</h1>
      <a href='https://github.com/IvanRoussev/ExploreMovies'>
        <img src={github} />
      </a>
    </div>
  );
}

export default Header;
