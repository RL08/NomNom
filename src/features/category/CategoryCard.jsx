import { Link } from "react-router-dom";
import "@features/category/CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <div className="card">
        <div className="card-img-container">
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="card-img"
          />
          <div className="card-overlay" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{category.strCategory}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
