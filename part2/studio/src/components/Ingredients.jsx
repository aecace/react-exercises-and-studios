import recipedata from "./recipe.json";

function IngredientList() {
  let IngredientsList = recipedata[0].map((ingredient) =>
  {
    return <li>{ingredient}</li>;
  }
  );

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        <li>{IngredientsList}</li>
      </ul>
    </div>
    );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 