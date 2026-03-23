import { cn } from "@/utils/cn.js";
import "@/components/section/Section.css";

function Section({ variant = "", children, ...props }) {
  return (
    <section className={cn("section", variant)} {...props}>
      {children}
    </section>
  );
}

export default Section;
