import trash from '../images/trash-icon.png';

function FavoriteShow({ favorite, removeFavorite }) {
  const handleDeleteClick = () => {
    removeFavorite(favorite.id);
  };
  return (
    <ul>
      {favorite.title}
      <img className='trash-icon' src={trash} onClick={handleDeleteClick} />
    </ul>
  );
}

export default FavoriteShow;
