import { H2 } from "@/components/ui/heading/Heading.jsx";
import { Li, Ol } from "@/components/ui/list/List.jsx";
import P from "@/components/ui/p/P.jsx";
import Section from "@/components/ui/section/Section.jsx";
import Span from "@/components/ui/span/Span.jsx";
import "@features/meal/style/MealInstructionSection.css";

function MealInstructionSection({ meal }) {
  const instructions =
    meal.strInstructions
      ?.split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s.length > 10) || [];

  return (
    <>
      <Section>
        <H2>Instructions</H2>
        <Ol>
          {instructions &&
            instructions.map((step, i) => (
              <Li variant="ordered dark" key={i}>
                <Span variant="lg bold">{String(i + 1).padStart(2, "0")}</Span>
                <Span variant="lg">{step}</Span>
              </Li>
            ))}
        </Ol>
      </Section>
    </>
  );
}

export default MealInstructionSection;
