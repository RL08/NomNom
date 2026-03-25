import {cn} from "@/utils/cn.js"
import "@/components/ui/p/P.css";

function P({ variant = "", children, ...props }) {
  return (
    <p className={cn("p", variant)} {...props}>
      {children}
    </p>
  );
}

export default P;