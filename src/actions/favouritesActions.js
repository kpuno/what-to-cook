import axios from 'axios';
import * as actionTypes from './actionTypes';

const HOST_URL = 'http://localhost:3090';

export function fetchFavouritesSuccess(dispatch, favourites) {
	dispatch({ type: actionTypes.FETCH_FAVOURITES_SUCCESS, data: favourites })
}

export function addFavouritesSuccess() {
	return {
		type: actionTypes.ADD_FAVOURITES_SUCCESS
	};
}

export function deleteFavouritesSuccess() {
	return {
		type: actionTypes.DELETE_FAVOURITES_SUCCESS
	};
}

export function fetchFavourites(email) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/getfavourites`, { email })
			.then(response => {
				fetchFavouritesSuccess(dispatch, response.data[0].favourites);
			})
			.catch(error => {
				console.log(error);
			});
	};
}

export function addFavourites({ email, id, title, image, likes }) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/addfavourites`, { email, id, title, image, likes })
			.then(response => {
				dispatch(addFavouritesSuccess());
			})
			.then(() => {
				axios.post(`${HOST_URL}/getfavourites`, { email })
					.then(response => {
						fetchFavouritesSuccess(dispatch, response.data[0].favourites);
					})
			})
			.catch(error => {
				console.log(error);
			});
	};
}

// too much re rendering, DE_AUTH_FAVOURITES name doesn't make sense

export function deleteFavourites({ email, id, title, image, likes }) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/removefavourites`, { email, id, title, image, likes })
			.then(response => {
				dispatch(deleteFavouritesSuccess());
				dispatch({ type: actionTypes.DE_AUTH_FAVOURITES });
				dispatch(fetchFavourites(email));
			})
			.catch(error => {
				console.log(error);
			});
	};
}