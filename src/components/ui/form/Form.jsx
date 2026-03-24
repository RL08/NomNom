import { cn } from "@/utils/cn.js";
import "@/components/ui/form/Form.css";

function Form({ variant = "", children, ...props }) {
  return (
    <form className={cn("form", variant)} {...props}>
      {children}
    </form>
  );
}

export default Form;
