import { cn } from "@/utils/cn.js";
import "@/components/ui/input/Input.css";

function Input({ variant = "", ...props }) {
  return <input className={cn("input", variant)} {...props} />;
}

export default Input;
