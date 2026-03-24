import { useCallback, useEffect, useState } from "react";
import { getCategories } from "@/services/mealService.js";
import "@/pages/home/HomePage.css";
import Section from "@/components/ui/section/Section.jsx";
import CategoryCard from "@/features/category/CategoryCard.jsx";
import RandomMealCard from "@/features/meal/components/RandomMealCard.jsx";
import { H1 } from "@/components/ui/heading/Heading.jsx";

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
        <H1 variant="fancy">Categories</H1>

        {error && <div className="error-message">{error}</div>}
        {loading && <div>Loading...</div>}
        {categories && (
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
