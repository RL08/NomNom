import { cn } from "@/utils/cn.js";
import "@/components/ui/span/Span.css";

function Span({ variant = "", children, ...props }) {
  return (
    <span className={cn("span", variant)} {...props}>
      {children}
    </span>
  );
}

export default Span;
