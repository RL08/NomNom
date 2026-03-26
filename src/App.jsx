import Navbar from "@/layouts/navbar/components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { FavoritesProvider } from "@/store/favorites/FavoritesProvider.jsx";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
      </FavoritesProvider>
    </>
  );
}

export default App;
