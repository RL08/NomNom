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
    <Button onClick={handleClick}>{favorited ? "✦ Saved" : "Save"}</Button>
  );
}

export default FavoriteButton;
