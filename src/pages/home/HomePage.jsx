import { useEffect, useState } from "react";
import { getCategories } from "@/services/mealService.js";
import CategoryCard from "@/features/category/CategoryCard.jsx";
import "@/pages/home/HomePage.css";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch {
        setCategoryError("Failed to load categories...");
      } finally {
        setCategoryLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <section className="categories-section">
      <h2>Categories</h2>
      {categoryError && <div className="error-message">{categoryError}</div>}
      {categoryLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              category={category}
              key={category.idCategory}
            ></CategoryCard>
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;
