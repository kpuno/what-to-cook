import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fetchDetailedRecipe } from './recipeActions'
import recipe_api from '../api/recipe_api';

export function addCompareRecipeSuccess(recipe) {
	return {
		type: actionTypes.ADD_COMPARE_RECIPES,
		action: recipe.data
	};
}

export function removeCompareRecipes() {
	return {
		type: actionTypes.REMOVE_COMPARE
	};
}

export function addCompareRecipe(recipeID) {
  return function (dispatch) {
    return recipe_api.getDetailedRecipe(recipeID).then(recipe => {
      dispatch(addCompareRecipeSuccess(recipe));
    }).catch(error => {
      throw (error);
    });
  };
}	

export function removeRecipe() {
	return function(dispatch) {
		dispatch(removeCompareRecipes());
	}
}