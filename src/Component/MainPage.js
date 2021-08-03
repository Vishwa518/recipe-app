import React, { useState } from "react";
import "../App.css";
import RecipeTitle from "./RecipeTitle";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [selected, setSelected] = useState("vegan");
  const YOUR_APP_ID = "8302babd";
  const YOUR_APP_KEY = "52a00db171c442569aa2e844c2c96076";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${selected}`;

  const getRecipes = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipeList(data?.hits));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div>
      <h1 onClick={getRecipes}>Food Recipe Plaza</h1>
      <form className="app-formSearch" onSubmit={onSubmit}>
        <input
          className="app-input"
          type="text"
          placeholder="Enter Recipe Name"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <input className="app-submit" type="submit" value="search" />
        <select className="app-dropdown">
          <option onClick={() => setSelected("vegan")}>vegan</option>
          <option onClick={() => setSelected("vegetarian")}>vegetarian</option>
          <option onClick={() => setSelected("paleo")}>paleo</option>
          <option onClick={() => setSelected("dairy-free")}>dairy-free</option>
          <option onClick={() => setSelected("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => setSelected("wheat-free")}>wheat-free</option>
          <option onClick={() => setSelected("egg-free")}>egg-free</option>
        </select>
      </form>

      <div className="app-recipe">
        {recipeList.map((recipe) => {
          return <RecipeTitle recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
