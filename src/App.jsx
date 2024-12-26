import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import IngredientsList from "./components/IngredientsList";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        ingredients={ingredients}
        setIngredients={setIngredients}


      />
      <Container>
        <InnerContainer>
          <FoodList
            setFoodId={setFoodId}
            foodData={foodData}
            ingredients={ingredients}
          />
        </InnerContainer>
        <InnerContainer>
          <IngredientsList ingredients={ingredients} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
