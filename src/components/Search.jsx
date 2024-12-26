import styles from "./search.module.css";
import IngredientsSearch from "./IngredientsSearch";
import FoodSearch from "./FoodSearch";
export default function Search({ foodData, setFoodData,ingredients,setIngredients }) {
  return (
    <div className={styles.searchContainer}>
      <FoodSearch foodData={foodData} setFoodData={setFoodData}  />
      <IngredientsSearch ingredients={ingredients} setIngredients={setIngredients}  />
    </div>
  );
}
