import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function recipeReducer(state = initialState.compare, action) {
	switch (action.type) {
		case types.ADD_COMPARE_RECIPES:
			return state.concat(action.action[0])
		case types.REMOVE_COMPARE:
			return [];
		default:
			return state;
	}
}
