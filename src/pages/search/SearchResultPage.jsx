import "@/pages/search/SearchResultPage.css"
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BackButton from "@/components/BackButton.jsx";
import { H1 } from "@/components/ui/heading/Heading.jsx";
import Section from "@/components/ui/section/Section.jsx";
import { searchMeals } from "@/services/mealService.js";
import P from "@/components/ui/p/P.jsx";
import MealCard from "@/features/meal/components/MealCard.jsx";

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMeals = useCallback(async () => {
    try {
      const meals = await searchMeals(query);
      setMeals(meals);
    } catch {
      setError("Failed to load meals...");
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    loadMeals();
  }, [loadMeals]);

  return (
    <>
      <Section>
        <BackButton />
        <div className="searchresultpage-title-container">
          <H1 variant="fancy">{query}</H1>
          {!loading && (
            <P>
              {meals.length} {meals.length === 1 ? "recipe" : "recipes"} found
            </P>
          )}
        </div>
      </Section>
      <Section>
        {error && <div className="error-message">{error}</div>}
        {loading && <div>Loading...</div>}
        {meals && (
          <div className="searchresultpage-grid">
            {meals.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal}></MealCard>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export default SearchResultPage;
