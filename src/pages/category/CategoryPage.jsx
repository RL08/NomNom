import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "@/services/mealService.js";
import "@/pages/category/CategoryPage.css"
import Section from "@/components/ui/section/Section.jsx";
import MealCard from "@/features/meal/components/MealCard.jsx";

function CategoryPage() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategories = useCallback(async () => {
    try {
      const meals = await getMealsByCategory(name);
      setMeals(meals);
    } catch {
      setError("Failed to load categories...");
    } finally {
      setLoading(false);
    }
  }, [name]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <Section>
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="meals-grid">
            {meals.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal}></MealCard>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export default CategoryPage;
