import "@features/meal/style/MealHeroCard.css"
import Span from "@/components/ui/span/Span.jsx";
import BackButton from "@/components/BackButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/ui/button/Button.jsx";
import FavoriteButton from "@/components/FavoriteButton.jsx";
import {
  Card,
  CardBody,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/ui/card/Card.jsx";

function MealHeroCard({ meal }) {
  return (
    <>
      <Card variant="lg">
        <CardImage src={meal.strMealThumb} alt={meal.strMeal} />
        <CardOverlay />
        <CardBody variant="lg absolute">
          <BackButton variant="dark" />
          <div className="mealherocard-card-tag-container">
            {meal.strCategory && (
              <Span variant="dark tag md">{meal.strCategory}</Span>
            )}
            {meal.strArea && <Span variant="dark tag md">{meal.strArea}</Span>}
          </div>
          <CardTitle variant="dark lg">{meal.strMeal}</CardTitle>
          <div className="mealherocard-card-link-container">
            <Button
              variant="dark primary"
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
              <FontAwesomeIcon icon="caret-right" />
            </Button>
            <FavoriteButton meal={meal} />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default MealHeroCard;
