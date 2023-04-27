import FavouriteShow from './FavoriteShow';

function FavoriteList({ favorites, removeFavorite }) {
  const listFavorites = favorites.map((favorite, index) => {
    return (
      <FavouriteShow
        key={index}
        favorite={favorite}
        removeFavorite={removeFavorite}
      />
    );
  });

  return (
    <div className='favorites-navbar'>
      <h2>Your Favorites</h2>
      {listFavorites}
    </div>
  );
}

export default FavoriteList;
