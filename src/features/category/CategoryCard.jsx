import { Link } from "react-router-dom";
import "@features/category/CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <div className="categorycard-card">
        <div className="categorycard-card-img-container">
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="categorycard-card-img"
          />
          <div className="categorycard-card-overlay" />
        </div>
        <div className="categorycard-card-body">
          <h3 className="categorycard-card-title">{category.strCategory}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
