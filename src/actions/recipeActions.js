import * as actionTypes from './actionTypes';
import recipe_api from '../api/recipe_api';

function fetchRecipeListSuccess(recipe_list) {
  return { 
    type: actionTypes.FETCH_RECIPE_LIST_SUCCESS, 
    data: recipe_list.data
  };
}

function fetchDetailedRecipeSuccess(recipe) {
  return { 
    type: actionTypes.FETCH_DETAILED_RECIPE_SUCCESS, 
    data: recipe.data
  };
}

//thunk to handle async tasks such as AJAX or database query
export function fetchRecipeList(ingredients) {
  return function (dispatch) {

    return recipe_api.getRecipeList(ingredients)
    .then(recipe_list => {
        dispatch(fetchRecipeListSuccess(recipe_list));

      }).catch(error => {
        throw (error);
      });
  };
}

export function fetchDetailedRecipe(recipeID) {
  return function (dispatch) {
    return recipe_api.getDetailedRecipe(recipeID).then(recipe => {
      dispatch(fetchDetailedRecipeSuccess(recipe));
    }).catch(error => {
      throw (error);
    });
  };
}

// https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1&mashape-key=oHRsKTMXiPmshFxbginEnVhLQ4mep1VT5rbjsno0AGzmtDhxaS
