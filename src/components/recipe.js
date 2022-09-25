import React, { useState, useEffect } from "react";

function Recipe(props) {
  const [recipe_name, setRecipe_name] = useState("");
  const [instructions, setInstructions] = useState("");
  const [requestType, setRequestType] = useState(props.request);
  const [request, setRequest] = useState("");
  const [endPoint, setEndPoint] = useState("");

  const handleSubmit = (event) => {
    fetch("http://127.0.0.1:5000/recipe/add", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        recipe_name: recipe_name,
        instructions: instructions,
      }),
    })
      .then((response) => {
        if (props.edit === true) {
          props.handleEditSubmit();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (requestType === "add") {
      setEndPoint("http://127.0.0.1:5000/recipe/add");
      setRequest("POST");
    } else console.log("hi");
    {
    }
  }, []);
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
