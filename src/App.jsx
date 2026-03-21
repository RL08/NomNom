import Navbar from "@/layouts/navbar/components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
