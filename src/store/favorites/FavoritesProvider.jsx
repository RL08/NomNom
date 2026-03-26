import { useState } from "react";
import { FavoritesContext } from "@/store/favorites/FavoritesContext.jsx";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (meal) => {
    setFavorites((prev) =>
      prev.some((favorite) => favorite.idMeal === meal.idMeal)
        ? prev
        : [...prev, meal],
    );
  };

  const removeFromFavorites = (idMeal) => {
    setFavorites((prev) => prev.filter((meal) => meal.idMeal !== idMeal));
  };

  const isFavorite = (idMeal) => {
    return favorites.some((meal) => meal.idMeal === idMeal);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
