import "@features/meal/style/MealCard.css";
import { Link } from "react-router-dom";
import Span from "@/components/ui/span/Span.jsx";
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
} from "@/components/ui/card/Card.jsx";

function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <Card variant="animated">
        <div className="meal-card-img-wrapper">
          <CardImage src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <CardBody>
          <CardTitle variant="wrap">{meal.strMeal}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
}

export default MealCard;
