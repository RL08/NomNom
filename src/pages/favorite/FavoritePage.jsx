import "@/pages/favorite/FavoritePage.css";
import Section from "@/components/ui/section/Section.jsx";
import { useFavorites } from "@/hooks/useFavorite.js";
import MealCard from "@features/meal/components/MealCard.jsx";
import { H2 } from "@/components/ui/heading/Heading.jsx";
import P from "@/components/ui/p/P.jsx";

function FavoritePage() {
  const { favorites, loading, error } = useFavorites();

  return (
    <Section>
      {error && <div className="error-message">{error}</div>}
      {loading && <div>Loading...</div>}
      {!favorites.length && (
        <div>
          <H2>No favorites yet</H2>
          <P>Start adding meals you like</P>
        </div>
      )}
      {favorites && (
        <div className="favoritepage-grid">
          {favorites.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal}></MealCard>
          ))}
        </div>
      )}
    </Section>
  );
}

export default FavoritePage;
