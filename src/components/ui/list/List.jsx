import { cn } from "@/utils/cn.js";
import "@/components/ui/list/styles/Ul.css";
import "@/components/ui/list/styles/Li.css";

function Ul({ variant = "", children, ...props }) {
  return (
    <ul className={cn("ul", variant)} {...props}>
      {children}
    </ul>
  );
}

function Li({ variant = "", children, ...props }) {
  return (
    <li className={cn("li", variant)} {...props}>
      {children}
    </li>
  );
}

export { Ul, Li };
