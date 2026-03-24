import "@/pages/meal/MealPage.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "@/services/mealService.js";
import Section from "@/components/ui/section/Section.jsx";
import { Card, CardImage, CardOverlay } from "@/components/ui/card/Card.jsx";

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
        {meal && (
          <Card variant="lg">
            <CardImage src={meal.strMealThumb} alt={meal.strMeal} />
            <CardOverlay />
          </Card>
        )}
      </Section>
    </>
  );
}

export default MealPage;
