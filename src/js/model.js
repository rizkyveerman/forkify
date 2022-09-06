export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(`failed to get the data! (${res.status})`);

  const { recipe } = data.data;
  state.recipe = {
    id: recipe.id,
    time: recipe.cooking_time,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    source: recipe.source_url,
    title: recipe.title,
  };

  console.log(recipe);
};
