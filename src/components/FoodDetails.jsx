import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a8d6ddae79ca4f61b135cd57b458dbad";
  useEffect(() => {
    try {
      const fetchFood = async () => {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!response.ok)
          throw new Error("Food Details API Callback Not Found");
        const data = await response.json();
        setFood(data);
        console.log(data);
        setIsLoading(false);
      };
      fetchFood();
    } catch (error) {
      console.error(error);
    }
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong>👪Serves {food.servings} </strong>
          </span>
          <span>
            {" "}
            <strong>
              {" "}
              {food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}{" "}
            </strong>{" "}
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""} </strong>{" "}
          </span>
        </div>
        <div>
          <span>
            {" "}
            <strong>
              💲 {Math.round(food.pricePerServing / 100)} Per serving{" "}
            </strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loadindg...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
