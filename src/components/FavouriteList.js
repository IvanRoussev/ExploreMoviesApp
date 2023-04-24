import FavouriteShow from './FavoriteShow';

function FavoriteList({ favorites }) {
  const listFavorites = favorites.map((favorite, index) => {
    return <FavouriteShow key={index} favorite={favorite} />;
  });

  return (
    <>
      <div className='favorites-navbar'>
        <h2>Your Favorites</h2>
        {listFavorites}
      </div>
    </>
  );
}

export default FavoriteList;
