import React from "react";
import "./RecipeTitle.css";

const RecipeTitle = ({ recipe }) => {
  console.log("recipe", recipe["recipe"]);
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|png)$/) != null && (
      <div className="recipe-title">
        <img
          className="recipe-title-img"
          src={recipe["recipe"]["image"]}
          alt="Photos"
        />
        <p className="recipe-title-name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
};

export default RecipeTitle;
