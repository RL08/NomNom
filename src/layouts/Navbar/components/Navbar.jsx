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
    <nav className="navbar">
      <div className="navbar-full-bleed-container">
        <Link to="/" className="navbar-logo-container">
          <span className="navbar-logo">Nom</span>
          <span className="navbar-logo">Nom</span>
        </Link>
        <form className="navbar-form" onSubmit={handleSearch}>
          <div className="navbar-search-container">
            <button className="navbar-button" type="submit">
              <FontAwesomeIcon icon="magnifying-glass" className="navbar-icon" />
            </button>
            <input
            className="navbar-input"
              type="text"
              placeholder="Search any meal..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </form>
        <div className="navbar-links">
          <NavLink to="/">Browse</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
