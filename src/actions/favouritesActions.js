import axios from 'axios';
import * as actionTypes from './actionTypes';

const HOST_URL = 'http://localhost:3090';

export function fetchFavouritesSuccess(favourites) {
	return {
		type: actionTypes.FETCH_FAVOURITES_SUCCESS,
		data: favourites
	};
}

export function fetchFavourites(email) {
	console.log("HERE");
	return function(dispatch) {
		axios.post(`${HOST_URL}/getfavourites`, { email })
			.then(response => {
				dispatch(fetchFavouritesSuccess(response.data[0].favourites));
			})
			.catch(error => {
				console.log(error);
			});
	};
}