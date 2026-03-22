import { useCallback, useEffect, useState } from "react";
import { getCategories } from "@/services/mealService.js";
import "@/pages/home/HomePage.css";
import CategoryCard from "@/features/category/CategoryCard.jsx";
import RandomMealCard from "@/features/meal/components/RandomMealCard.jsx";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategories = useCallback(async () => {
    try {
      const categories = await getCategories();
      setCategories(categories);
    } catch {
      setError("Failed to load categories...");
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <section className="todays-pick-section">
        <RandomMealCard></RandomMealCard>
      </section>
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
    </>
  );
}

export default HomePage;
