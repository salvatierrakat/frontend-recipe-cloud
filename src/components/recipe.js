import React, { useState, useEffect } from "react";

function Recipe(props) {
  const [recipe_name, setRecipe_name] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://recipe-cloud-api.herokuapp.com/recipe/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        recipe_name: recipe_name,
        instructions: instructions,
      }),
    })
      .then((response) => {
        console.log(response);
        if (props.edit === true) {
          props.handleEditSubmit();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-recipe-container">
      <h3>Add Recipe</h3>
      <form
        className="recipe-form-container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="recipe-inputs">
          <input
            type="text"
            placeholder="Recipe Name"
            name="recipe-name"
            onChange={(event) => setRecipe_name(event.target.value)}
          />
          <input
            type="text"
            placeholder="Instructions"
            name="instructions"
            onChange={(event) => setInstructions(event.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Recipe;
