import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomMeal } from "@/services/mealService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@features/meal/style/RandomMealCard.css";

function RandomMealCard() {
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshMeal = useCallback(async () => {
    try {
      const randomMeal = await getRandomMeal();
      setRandomMeal(randomMeal);
    } catch {
      setError("Failed to load a random meal...");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshMeal();
  }, [refreshMeal]);

  return (
    <>
      <div className="randommealcard-card-header">
        <h2>Today's Pick</h2>
        <button className="randommealcard-button" onClick={refreshMeal}>
          <FontAwesomeIcon icon="repeat" />
          Shuffle
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="randommealcard-card">
          <div className="randommealcard-card-img-container">
            <img
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
              className="randommealcard-card-img"
            />
            <div className="randommealcard-card-overlay" />
          </div>
          <div className="randommealcard-card-body">
            <div className="randommealcard-card-tag-container">
              {randomMeal.strCategory && (
                <span className="randommealcard-card-tag">{randomMeal.strCategory}</span>
              )}
              {randomMeal.strArea && (
                <span className="randommealcard-card-tag">{randomMeal.strArea}</span>
              )}
            </div>
            <h2 className="randommealcard-card-title">{randomMeal.strMeal}</h2>
            <p className="randommealcard-card-description">
              {randomMeal.strInstructions?.slice(0, 160)}...
            </p>
            <div className="randommealcard-card-link">
              <Link to={`/meal/${randomMeal.strMeal}`} className="randommealcard-view-button">
                View Recipe →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomMealCard;
