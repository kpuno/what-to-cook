import axios from 'axios';
import { browserHistory } from 'react-router';
// import {SubmissionError} from 'redux-form';
import * as types from './actionTypes';
import getUser from './userActions';
import { fetchFavouritesSuccess } from './favouritesActions';

const HOST_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/signin`, { email, password })
			.then(response => {
				authorizeUser(dispatch, response.data.token, email);
			})
		axios.post(`${HOST_URL}/getfavourites`, { email })
			.then(response => {
				fetchFavouritesSuccess(dispatch, response.data[0].favourites);
			})
			.catch(error => {
				console.log(error);
			})
			.catch(error => {
				authError(dispatch, error);
			});
	};
}

export function signUpUser({ email, password }) {
	return function (dispatch) {
		axios.post(`${HOST_URL}/signup`, { email, password })
			.then(response => {
				authorizeUser(dispatch, response.data.token);
			})
			.catch(error => {
				authError(dispatch, error);
			});
	};
}

export function deAuthUser() {
	return function (dispatch) {
		localStorage.removeItem('token');
		clearState(dispatch);
	};
}

export function fetchData() {
	return function (dispatch) {
		const token = localStorage.getItem('token');
		axios.get(`${HOST_URL}`, {
			headers: { authorization: token }
		})
			.then(res => {
				axios.get(`${res.data.secretAPI}`)
					.then(response => {
						dispatch({ type: types.FETCH_DATA, data: response.data });
					})
					.catch(error => authError(dispatch, error));
			})
			.catch(error => authError(dispatch, error));
	};
}

function authError(dispatch, error) {
	dispatch({ type: types.AUTH_ERROR, message: error.message });
}

function authorizeUser(dispatch, token, email) {
	dispatch({ type: types.AUTH_USER });
	dispatch({ type: types.GET_USER, email });
	localStorage.setItem('token', token);
	browserHistory.push('/favourites');
}

function clearState(dispatch) {
	dispatch({ type: types.DE_AUTH_USER });
	dispatch({ type: types.DE_AUTH_FAVOURITES });
}