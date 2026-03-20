import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.jsx';
import HomePage from '@/pages/HomePage.jsx';
import CategoryPage from '@/pages/CategoryPage.jsx';
import MealPage from '@/pages/MealPage.jsx';
import FavoritePage from '@/pages/FavoritePage.jsx';
import SearchResultPage from '@/pages/SearchResultPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:name", element: <CategoryPage /> },
      { path: "meal/:id", element: <MealPage /> },
      { path: "favorite", element: <FavoritePage /> },
      { path: "search", element: <SearchResultPage /> },
    ],
  },
]);

export default router