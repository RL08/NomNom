import "@features/meal/style/MealIngredientAside.css";
import { getIngredientsFromMeal } from "@/services/mealService.js";
import Section from "@/components/ui/section/Section.jsx";
import { H2 } from "@/components/ui/heading/Heading.jsx";
import { Li, Ul } from "@/components/ui/list/List.jsx";
import Img from "@/components/ui/img/Img.jsx";
import Span from "@/components/ui/span/Span.jsx";

function MealIngredientAside({ meal }) {
  const ingredients = getIngredientsFromMeal(meal);

  return (
    <>
      <Section>
        <H2>Ingredients</H2>
        <Ul>
          {ingredients &&
            ingredients.map(({ ingredient, measure }, i) => (
              <Li key={i}>
                <div className="mealingredientaside-ingredient-img-container">
                  <Img
                    src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
                    alt={ingredient}
                  />
                </div>
                <div className="ingredient-info">
                  {ingredient && <Span variant="md logo bold">{ingredient}</Span>}
                  {measure && <Span variant="sm logo bold">{measure}</Span>}
                </div>
              </Li>
            ))}
        </Ul>
      </Section>
    </>
  );
}

export default MealIngredientAside;
