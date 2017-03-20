import * as actionTypes from './actionTypes';
import recipe_api from '../api/recipe_api';

// same action and thunk as getDetailedRecipe

function addRecipeToFavouritesSuccess(recipe) {
  return { 
    type: actionTypes.ADD_RECIPE_TO_FAVOURITES_SUCCESS, 
    data: recipe.data
  };
}

export function addRecipeToFavourites(recipeID) {
  return function (dispatch) {
    return recipe_api.getDetailedRecipe(recipeID).then(recipe => {
      dispatch(addRecipeToFavouritesSuccess(recipe));
    }).catch(error => {
      throw (error);
    });
  };
}