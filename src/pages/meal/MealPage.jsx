import "@/pages/meal/MealPage.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "@/services/mealService.js";
import Section from "@/components/ui/section/Section.jsx";
import MealIngredientAside from "@/features/meal/components/MealIngredientAside.jsx";
import MealInstructionSection from "@/features/meal/components/MealInstructionSection.jsx";
import MealHeroCard from "@/features/meal/components/MealHeroCard.jsx";

function MealPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMeal = useCallback(async () => {
    try {
      const meal = await getMealById(id);
      setMeal(meal);
    } catch {
      setError("Failed to load meal...");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadMeal();
  }, [loadMeal]);

  return (
    <>
      <Section>
        {loading && <div>Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {meal && <MealHeroCard meal={meal} />}
      </Section>
      <div className="mealpage-meal-info-container">
        {meal && <MealIngredientAside meal={meal} />}
        {meal && <MealInstructionSection meal={meal} />}
      </div>
    </>
  );
}

export default MealPage;
