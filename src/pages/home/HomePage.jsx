import { useEffect, useState } from "react";
import { getCategories } from "@/services/mealService.js";
import CategoryCard from "@/features/category/CategoryCard.jsx";
import "@/pages/home/HomePage.css";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch {
        setError("Failed to load categories...");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return (
    <section className="categories-section">
      <h2>Categories</h2>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
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
