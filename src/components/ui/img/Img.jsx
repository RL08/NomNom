import { cn } from "@/utils/cn.js";
import "@/components/ui/img/Img.css";

function Img({ variant = "", ...props }) {
  return <img className={cn("img", variant)} {...props} />;
}

export default Img