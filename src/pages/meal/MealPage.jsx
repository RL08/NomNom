import "@/pages/meal/MealPage.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "@/services/mealService.js";
import Section from "@/components/ui/section/Section.jsx";
import {
  Card,
  CardBody,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/ui/card/Card.jsx";
import MealIngredientAside from "@/features/meal/components/MealIngredientAside.jsx";
import MealInstructionSection from "@/features/meal/components/MealInstructionSection.jsx";
import Span from "@/components/ui/span/Span.jsx";
import BackButton from "@/components/BackButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/ui/button/Button.jsx";
import FavoriteButton from "@/components/FavoriteButton.jsx";

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
            <CardBody variant="lg absolute">
              <BackButton variant="dark" />
              <div className="mealpage-card-tag-container">
                {meal.strCategory && (
                  <Span variant="dark tag md">{meal.strCategory}</Span>
                )}
                {meal.strArea && (
                  <Span variant="dark tag md">{meal.strArea}</Span>
                )}
              </div>
              <CardTitle variant="dark lg">{meal.strMeal}</CardTitle>
              <div className="mealpage-card-link-container">
                <Button
                  variant="dark primary"
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                  <FontAwesomeIcon icon="caret-right" />
                </Button>
                <FavoriteButton meal={meal}/>
              </div>
            </CardBody>
          </Card>
        )}
      </Section>
      <div className="mealpage-meal-info-container">
        {meal && <MealIngredientAside meal={meal} />}
        {meal && <MealInstructionSection meal={meal} />}
      </div>
    </>
  );
}

export default MealPage;
