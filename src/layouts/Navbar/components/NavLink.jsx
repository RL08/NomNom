import { NavLink as DefaultNavLink } from "react-router-dom";
import "@/layouts/navbar/styles/NavLink.css";
import { cn } from "@/utils/cn.js";

function NavLink({ variant = "", to, children }) {
  return (
    <DefaultNavLink
      to={to}
      className={({ isActive }) =>
        `${cn("navlink", variant)} ${isActive ? "active" : ""}`
      }
    >
      {children}
    </DefaultNavLink>
  );
}

export default NavLink;
