import "@/features/meal/style/MealInstructionSection.css";
import { H2 } from "@/components/ui/heading/Heading.jsx";
import Section from "@/components/ui/section/Section.jsx";
import P from "@/components/ui/p/P.jsx";

function MealInstructionSection({ meal }) {
  const instructions = meal.strInstructions?.split(/\r\n|\r|\n/) ?? [];

  return (
    <>
      <Section>
        <H2>Instructions</H2>
        {instructions && (
          <div className="mealinstructionsection-instruction-wrapper">
            {instructions.map((line, index) => (
              <P variant="dark lg mb" key={index}>
                {line}
              </P>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export default MealInstructionSection;
