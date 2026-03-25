import { cn } from "@/utils/cn.js";
import "@/components/ui/button/Button.css";
import { Link } from "react-router-dom";

function Button({ variant = "", href = null, to = null, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className={cn("button", variant)} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cn("button", variant)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn("button", variant)} {...props}>
      {children}
    </button>
  );
}

export default Button;
