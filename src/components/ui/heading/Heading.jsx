import { cn } from "@/utils/cn.js";
import "@/components/ui/heading/styles/H1.css";
import "@/components/ui/heading/styles/H2.css";

function H1({ variant = "", children, ...props }) {
  return (
    <h1 className={cn("h1", variant)} {...props}>
      {children}
    </h1>
  );
}

function H2({ variant = "", children, ...props }) {
  return (
    <h2 className={cn("h2", variant)} {...props}>
      {children}
    </h2>
  );
}

export { H1, H2 };
