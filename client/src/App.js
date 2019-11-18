import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import Recipe from "./Recipe";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";

import "./index.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/recipes`)
      .then(response => response.json())
      .then(recipes => setRecipes(recipes));
  });

  return (
    <div>
      <h1>Recipes!</h1>
      {/* <pre>{JSON.stringify(recipes, null, 2)}</pre> */}
      <Router>
        <Recipes path="/" recipes={recipes} />
        <RecipeDetail
          path="/recipe/:recipeId"
          recipe={recipes.filter(recipe => recipe._id === recipe.id)}
        />
      </Router>
    </div>
  );
}

export default App;
