
/* import "../index.css";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import React, { useState } from "react";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);
 
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)
  }

  function handleSubmit(event) {
    event.preventDefault(); // ✅ Prevent page reload

    const newForm = new FormData(event.currentTarget);
    const newIngredient = newForm.get("ingredient").trim();

    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }

    event.target.reset(); // ✅ Clear the input field
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="Ingredients-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredients"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
    
    {recipe.length > 0 && (
    <div className="recipe-section">
      <ClaudeRecipe recipe={recipe} />
    </div>
  )}
    </main>
  );
}
*/

import "../index.css";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import React, { useState } from "react";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(""); 

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newForm = new FormData(event.currentTarget);
    const newIngredient = newForm.get("ingredient").trim();
    if (newIngredient) {
      setIngredients(prev => [...prev, newIngredient]);
    }
    event.target.reset();
  }

  console.log("▶ Ingredients:", ingredients);
  console.log("▶ Recipe:", recipe);

  return (
    <main>
      <form onSubmit={handleSubmit} className="Ingredients-form">
        <input name="ingredient" placeholder="e.g. oregano" />
        <button type="submit">Add Ingredient</button>
      </form>

    <IngredientsList 
        ingredients={ingredients}
        getRecipe={getRecipe}
    />
    
      {/* ===== Explicit rendering block ===== */}
     {/* ↓ inside your return() in Main.jsx */}
<div className="recipe-section" style={{ minHeight: 200 }}>
  {recipe !== "" ? (
    <ClaudeRecipe recipe={recipe} />
  ) : (
    <p className="placeholder">
      Your recipe will appear here once you click “Get a recipe.”
    </p>
  )}
</div>



    </main>
  );
}
