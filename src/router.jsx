import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.jsx';
import HomePage from '@/pages/home/HomePage.jsx';
import CategoryPage from '@/pages/category/CategoryPage.jsx';
import MealPage from '@/pages/meal/MealPage.jsx';
import FavoritePage from '@/pages/favorite/FavoritePage.jsx';
import SearchResultPage from '@/pages/search/SearchResultPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:name", element: <CategoryPage /> },
      { path: "meal/:name", element: <MealPage /> },
      { path: "favorite", element: <FavoritePage /> },
      { path: "search", element: <SearchResultPage /> },
    ],
  },
]);

export default router