import { useEffect, useState } from "react";
import { FavoritesContext } from "@/store/favorites/FavoritesContext.jsx";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      setError("Failed to load favorites");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      setError("Failed to save favorites");
    }
  }, [favorites]);

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
    loading,
    error,
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
