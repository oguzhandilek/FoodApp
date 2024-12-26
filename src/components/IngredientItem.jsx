import styles from "./ingredientitem.module.css";
export default function IngredientItem({ ingredient, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
 
      <img className={styles.image} src={ingredient.image} alt={ingredient.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{ingredient.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setFoodId(ingredient.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
