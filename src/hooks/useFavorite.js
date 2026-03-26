import { useContext } from "react";
import { FavoritesContext } from "@/store/favorites/FavoritesContext.jsx";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
