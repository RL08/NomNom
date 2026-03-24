import { cn } from "@/utils/cn.js";
import "@/components/ui/heading/styles/H1.css";

function H1({ variant = "", children, ...props }) {
  return (
    <h1 className={cn("h1", variant)} {...props}>
      {children}
    </h1>
  );
}

export {
    H1,
}