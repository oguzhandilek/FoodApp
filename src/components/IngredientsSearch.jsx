import { useEffect,useState } from "react";
import styles from "./ingredientssearch.module.css";
export default function IngredientsSearch({ ingredients, setIngredients }) {
    const [query, setQuery] = useState("apples,+flour,+sugar");
  useEffect(() => {
    const URL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
    const API_KEY = "a8d6ddae79ca4f61b135cd57b458dbad";
    const getIngredients = async () => {
      const response = await fetch(
        `${URL}${query}&number=5&apiKey=${API_KEY}`
      );
      if (!response.ok) throw new Error("Ingredients API çağrısı yapılamadı");
      const data = await response.json();
      setIngredients(data);
    };
    getIngredients();
  
  }, [query]);

  return (
    <div>
      <div className={styles.searchContainer}>
       
        <div>
          {" "}
          <input
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
            type="text"
            value={query}
          />
        </div>
      </div>
    </div>
  );
}
