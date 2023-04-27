import github from '../images/github-mark.png';

function Header() {
  return (
    <div className='headear'>
      <h1>Movies</h1>
      <a
        href='https://github.com/IvanRoussev/ExploreMoviesApp'
        target='_blank'
        rel='noreferrer'
      >
        <img src={github} alt='github' />
      </a>
    </div>
  );
}

export default Header;
