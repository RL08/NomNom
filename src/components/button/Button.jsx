import { cn } from "@/utils/cn.js";
import "@/components/button/Button.css";

function Button({ variant = "", children, ...props }) {
  return (
    <button className={cn("button", variant)} {...props}>
      {children}
    </button>
  );
}

export default Button;
