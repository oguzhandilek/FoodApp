import { useEffect, useState } from "react";
import styles from "./foodsearch.module.css"
export default function FoodSearch({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "a8d6ddae79ca4f61b135cd57b458dbad";
    const fetchFood = async () => {
      try {
        const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        if (!response.ok) throw new Error("API çağrısı başarısız oldu");
        const data = await response.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error(error);
      }
     

    };
    fetchFood();
  }, [query]);
  return (
    <div>
        
      <div className={styles.foodSearch}>
        {" "}
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
