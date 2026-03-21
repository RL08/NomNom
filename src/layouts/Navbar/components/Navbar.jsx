import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavLink from "@/layouts/navbar/components/NavLink.jsx";
import "@/layouts/navbar/styles/Navbar.css";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let query = searchInput.trim();
    if (query) {
      navigate(`/search?q=${query}`);
      setSearchInput("");
    }
  };

  return (
    <nav>
      <div className="full-bleed-container">
        <Link to="/" className="logo-container">
          <span className="logo">Nom</span>
          <span className="logo">Nom</span>
        </Link>
        <form onSubmit={handleSearch}>
          <div className="search-container">
            <button type="submit">
              <FontAwesomeIcon icon="magnifying-glass" className="icon" />
            </button>
            <input
              type="text"
              placeholder="Search any meal..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </form>
        <div className="links">
          <NavLink to="/">Browse</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
