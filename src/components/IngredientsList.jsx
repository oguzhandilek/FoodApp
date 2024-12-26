import IngredientItem from "./IngredientItem";
export default function IngredientsList({ ingredients, setFoodId }) {
  return (
    <div>
      <h1>Filter by Ingredients</h1>

      {ingredients.map((ingredient) => (
        <h1>
          {" "}
          
          <IngredientItem
            key={ingredient.id}
            ingredient={ingredient}
            setFoodId={setFoodId}
          />
        </h1>
      ))}
    </div>
  );
}
