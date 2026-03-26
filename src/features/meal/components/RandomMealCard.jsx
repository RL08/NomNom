import "@features/meal/styles/RandomMealCard.css";
import { useCallback, useEffect, useState } from "react";
import { getRandomMeal } from "@/services/mealService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/ui/button/Button.jsx";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/ui/card/Card.jsx";
import Span from "@/components/ui/span/Span.jsx";
import { H1 } from "@/components/ui/heading/Heading.jsx";
import FavoriteButton from "@/components/FavoriteButton.jsx";

function RandomMealCard() {
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshMeal = useCallback(async () => {
    try {
      const randomMeal = await getRandomMeal();
      setRandomMeal(randomMeal);
    } catch {
      setError("Failed to load a random meal...");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshMeal();
  }, [refreshMeal]);

  return (
    <>
      <div className="randommealcard-header">
        <H1 variant="fancy">Today's Pick</H1>
        <Button onClick={refreshMeal}>
          <FontAwesomeIcon icon="repeat" />
          Shuffle
        </Button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && <div>Loading...</div>}
      {randomMeal && (
        <Card variant="lg">
          <CardImage src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <CardOverlay variant="darker" />
          <CardBody variant="lg absolute">
            <div className="randommealcard-card-tag-container">
              {randomMeal.strCategory && (
                <Span variant="dark tag sm">{randomMeal.strCategory}</Span>
              )}
              {randomMeal.strArea && (
                <Span variant="dark tag sm">{randomMeal.strArea}</Span>
              )}
            </div>
            <CardTitle variant="dark lg">{randomMeal.strMeal}</CardTitle>
            <CardDescription variant="dark lg">
              {randomMeal.strInstructions?.slice(0, 160)}...
            </CardDescription>
            <div className="randommealcard-card-link-container">
              <Button variant="primary dark" to={`/meal/${randomMeal.idMeal}`}>
                View Recipe
                <FontAwesomeIcon icon="caret-right" />
              </Button>
              <FavoriteButton meal={randomMeal} />
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
}

export default RandomMealCard;
