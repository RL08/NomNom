import { Link } from "react-router-dom";
import "@features/category/CategoryCard.css";
import {
  Card,
  CardBody,
  CardImage,
  CardOverlay,
  CardTitle,
} from "@/components/card/Card.jsx";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <Card variant="animated">
        <div className="categorycard-card-img-container">
          <CardImage
            src={category.strCategoryThumb}
            alt={category.strCategory}
          />
          <CardOverlay />
        </div>
        <CardBody>
          <CardTitle>{category.strCategory}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
}

export default CategoryCard;
