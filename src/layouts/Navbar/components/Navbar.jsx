import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "@/layouts/navbar/styles/Navbar.css";
import NavLink from "@/layouts/navbar/components/NavLink.jsx";
import Button from "@/components/ui/button/Button.jsx";
import Input from "@/components/ui/input/Input.jsx";
import Form from "@/components/ui/form/Form.jsx";
import Span from "@/components/ui/span/Span.jsx";

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
          <Span variant="logo">Nom</Span>
          <Span variant="logo">Nom</Span>
        </Link>
        <Form variant="navbar" onSubmit={handleSearch}>
          <div className="navbar-search-container">
            <Button variant="nostyle" type="submit">
              <FontAwesomeIcon
                icon="magnifying-glass"
                className="navbar-icon"
              />
            </Button>
            <Input
              type="text"
              placeholder="Search any meal..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </Form>
        <div className="navbar-link-container">
          <NavLink to="/">Browse</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
