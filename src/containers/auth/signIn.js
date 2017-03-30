import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
import SignInForm from './signInForm';

class SignIn extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signInUser({ email, password });
	}

	renderAlert() {
		console.log(this.props.errorMessage);
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> Wrong email and password combination.
				</div>
			);
		}	
	}

	render() {
		return (
			<div>
				<SignInForm handleFormSubmit={this.handleFormSubmit.bind(this)} />
				<br/>
				{this.renderAlert()}
			</div>
		);
	}
}

SignIn.propTypes = {
	actions: PropTypes.func,
	signInUser: PropTypes.func
};

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(SignIn);