import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function recipeReducer(state = initialState.recipe, action) {
  switch(action.type) {
    case types.FETCH_RECIPE_LIST_SUCCESS:
      return {...state, recipelist: [...action.data] };
    case types.FETCH_DETAILED_RECIPE_SUCCESS:
      return { ...state, activerecipe: [...action.data]};
    default:
      return state;
  }
}
