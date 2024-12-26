import FoodItem from "./FoodItem";

export default function FoodList({ foodData,setFoodId }) {
  return (
    <div>
      <h1>Filter by Food Title</h1>
      {foodData.map((food) =>(<h1>
     <FoodItem key={food.id} food={food} setFoodId={setFoodId}/>
      </h1>) )}
      
    </div>
  );
}
