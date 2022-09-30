import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    fetch("https://recipe-cloud-api.herokuapp.com")
      .then((res) => res.json())
      .then((res) => setRecipes(res));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  const deleteRecipes = (id) => {
    fetch(`https://recipe-cloud-api.herokuapp.com/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      const deletedRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(deletedRecipes);
    });
  };

  return (
    <div>
      <h1 className="homepage">Recipe Cloud</h1>
      <div className="page-container">
        <Recipe request={"post"} />
        {recipes.map((recipe) => (
          <div className="recipesContainer">
            {recipe.recipe_name}{" "}
            <div className="instructions">
              Instructions: {recipe.instructions}
            </div>
            <button type="button" onClick={() => deleteRecipes(recipe.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
