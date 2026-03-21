import { NavLink as DefaultNavLink } from "react-router-dom";
import "@/layouts/navbar/styles/NavLink.css"

function NavLink({ to, children }) {
  return (
    <DefaultNavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </DefaultNavLink>
  );
}

export default NavLink