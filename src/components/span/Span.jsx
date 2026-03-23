import { cn } from "@/utils/cn.js";
import "@/components/span/Span.css";

function Span({ variant = "", children, ...props }) {
  return (
    <span className={cn("span", variant)} {...props}>
      {children}
    </span>
  );
}

export default Span;
