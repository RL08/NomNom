import { useCallback, useEffect, useState } from "react";
import { getCategories } from "@/services/mealService.js";
import "@/pages/home/HomePage.css";
import Section from "@/components/section/Section.jsx";
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
      <Section>
        <RandomMealCard></RandomMealCard>
      </Section>
      <Section>
        <h1>Categories</h1>

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
      </Section>
    </>
  );
}

export default HomePage;
