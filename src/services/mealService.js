const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
};

export const getMealsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals || [];
};

export const getRandomMeal = async () => {
  const response = await fetch(`${BASE_URL}/random.php`);
  const data = await response.json();
  return data.meals[0];
};
