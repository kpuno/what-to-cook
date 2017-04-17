// Set up your application entry point here...
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.scss'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

if (localStorage.getItem('token')) {
	// fix this
	// store.dispatch({ type: 'AUTH_USER' });
	store.dispatch({ type: 'DE_AUTH_USER' });
}

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
