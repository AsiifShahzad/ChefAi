
/*
export default function IngredientsList({ ingredients, getRecipe }) {
  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <section>
      <h2 className="onhand">Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipe}>Get a recipe</button>
      </div>
    </section>
  );
}
*/

export default function IngredientsList({ ingredients, getRecipe }) {
  return (
    <section>
      <h2 className="onhand">Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        {/* 👇 note the correct prop name */}
        <button onClick={getRecipe}>Get a recipe</button>
      </div>
    </section>
  )
}
