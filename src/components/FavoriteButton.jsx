import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "@/hooks/useFavorite.js";
import Button from "@/components/ui/button/Button.jsx";

function FavoriteButton({ meal }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorited = isFavorite(meal.idMeal);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    favorited ? removeFromFavorites(meal.idMeal) : addToFavorites(meal);
  };

  return (
    <Button
      variant="icon absolutetopright"
      onClick={handleClick}
      title={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      <FontAwesomeIcon
        icon={favorited ? ["fas", "heart"] : ["far", "heart"]}
        style={{ color: "rgb(230, 102, 99)" }}
      />
    </Button>
  );
}

export default FavoriteButton;
