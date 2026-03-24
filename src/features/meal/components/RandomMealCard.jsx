import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomMeal } from "@/services/mealService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@features/meal/style/RandomMealCard.css";
import Button from "@/components/ui/button/Button.jsx";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardLink,
  CardOverlay,
  CardTitle,
} from "@/components/ui/card/Card.jsx";
import Span from "@/components/ui/span/Span.jsx";
import { H1 } from "@/components/ui/heading/Heading.jsx";

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
        <H1>Today's Pick</H1>
        <Button onClick={refreshMeal}>
          <FontAwesomeIcon icon="repeat" />
          Shuffle
        </Button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card variant="lg">
          <div className="randommealcard-card-img-container">
            <CardImage src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
            <CardOverlay variant="darker" />
          </div>
          <CardBody variant="lg">
            <div className="randommealcard-card-tag-container">
              {randomMeal.strCategory && (
                <Span variant="dark tag lg">{randomMeal.strCategory}</Span>
              )}
              {randomMeal.strArea && (
                <Span variant="dark tag lg">{randomMeal.strArea}</Span>
              )}
            </div>
            <CardTitle variant="dark lg">{randomMeal.strMeal}</CardTitle>
            <CardDescription variant="dark lg">
              {randomMeal.strInstructions?.slice(0, 160)}...
            </CardDescription>
            <div className="randommealcard-card-link-container">
              <CardLink
                variant="dark button amber"
                to={`/meal/${randomMeal.strMeal}`}
              >
                View Recipe →
              </CardLink>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
}

export default RandomMealCard;
