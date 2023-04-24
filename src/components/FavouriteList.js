import FavouriteShow from './FavoriteShow';

function FavoriteList({ favorites }) {
  const listFavorites = favorites.map((favorite, index) => {
    return <FavouriteShow key={index} favorite={favorite} />;
  });

  return <div>{listFavorites}</div>;
}

export default FavoriteList;
