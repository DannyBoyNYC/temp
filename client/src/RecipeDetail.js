import React from "react";

function RecipeDetail(props) {
  const {
    recipeId,
    _id,
    title,
    description,
    image,
    ingredients,
    preparation
  } = props.recipe;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default RecipeDetail;
