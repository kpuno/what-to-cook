import * as types from '../actions/actionTypes';
import initialState from './initialState';

// use initialState.favourites, its ruining mapStateToProps in RecipeCard
export default function favouritesReducer(state = initialState.favourites, action) {
  switch(action.type) {
    case types.FETCH_FAVOURITES_SUCCESS:
      return state.concat(action.data);
		case types.ADD_FAVOURITES_SUCCESS:
			return state;
		case types.DE_AUTH_FAVOURITES:
			return [];
		case types.DELETE_FAVOURITES_SUCCESS:
			return state;
    default:
      return state;
  }
}