import * as types from './actionTypes';

export function getUser(email) {
	dispatch({ type: types.GET_USER , email});
}