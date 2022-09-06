import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const getRecipe = async function () {
  //loading spinner
  recipeView.renderSpinner();
  try {
    //1. get the recipe data
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);
    await model.loadRecipe(id); //2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

['hashchange/', 'load'].forEach(ev => window.addEventListener(ev, getRecipe));
