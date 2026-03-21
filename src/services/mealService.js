const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
};