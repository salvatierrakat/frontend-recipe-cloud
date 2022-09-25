import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
// import Modal from './Modal'
/* import axios from "axios"; */

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    fetch("http://127.0.0.1:5000/recipe")
      .then((res) => res.json())
      .then((res) => setRecipes(res));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  const deleteRecipes = (id) => {
    fetch(`http://127.0.0.1:5000/recipe/${id}`, { method: "DELETE" }).then(
      (res) => {
        console.log(res);
        const deletedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(deletedRecipes);
      }
    );
  };

  return (
    <div>
      <h1 className="homepage">Recipe Cloud</h1>
      <Recipe request={"post"} />
      {recipes.map((recipe) => (
        <div className="recipesContainer">
          {recipe.recipe_name}{" "}
          <div className="instructions">
            Instructions: {recipe.instructions}
          </div>
          <button onClick={() => deleteRecipes(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
