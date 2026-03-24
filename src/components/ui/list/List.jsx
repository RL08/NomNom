import { cn } from "@/utils/cn.js";
import "@/components/ui/list/styles/Ul.css";
import "@/components/ui/list/styles/Ol.css";
import "@/components/ui/list/styles/Li.css";

function Ul({ variant = "", children, ...props }) {
  return (
    <ul className={cn("ul", variant)} {...props}>
      {children}
    </ul>
  );
}

function Ol({ variant = "", children, ...props }) {
  return (
    <ol className={cn("ol", variant)} {...props}>
      {children}
    </ol>
  );
}

function Li({ variant = "", children, ...props }) {
  return (
    <li className={cn("li", variant)} {...props}>
      {children}
    </li>
  );
}

export { Ul, Ol, Li };
