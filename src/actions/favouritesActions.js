import axios from 'axios';
import * as actionTypes from './actionTypes';

const HOST_URL = 'http://localhost:3090';

export function fetchFavouritesSuccess(favourites) {
	return {
		type: actionTypes.FETCH_FAVOURITES_SUCCESS,
		data: favourites
	};
}

export function addFavouritesSuccess() {
	return {
		type: actionTypes.ADD_FAVOURITES_SUCCESS
	};
}

export function fetchFavourites(email) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/getfavourites`, { email })
			.then(response => {
				dispatch(fetchFavouritesSuccess(response.data[0].favourites));
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
			.catch(error => {
				console.log(error);
			});
	};
}