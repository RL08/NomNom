import "@features/meal/style/MealCard.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
} from "@/components/ui/card/Card.jsx";
import FavoriteButton from "@/components/FavoriteButton.jsx";

function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <Card variant="md">
        <div className="mealcard-img-container">
          <CardImage src={meal.strMealThumb} alt={meal.strMeal} />
          <FavoriteButton meal={meal} />
        </div>
        <CardBody>
          <CardTitle variant="wrap">{meal.strMeal}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
}

export default MealCard;
