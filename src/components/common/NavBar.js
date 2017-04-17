import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import * as actions from '../../actions/authActions';

class NavBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.user != null) {
      this.setState({username:  nextProps.user});
    }
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	handleSignOut() {
		this.props.deAuthUser();
	}

	headerLinks() {
		if (this.props.authenticated) {
			return (
				[
					<NavItem key="username">{this.state.username}</NavItem>,
					<li className="nav-item" key="signout" onClick={this.handleSignOut.bind(this)}><Link to='/' className="nav-link">Sign Out</Link></li>
				]
			);
		} else {
			return (
				[
					<LinkContainer key="signup" to={'/signup'}><NavItem>Sign Up</NavItem></LinkContainer>,
					<LinkContainer key="signin" to={'/signin'}><NavItem>Sign In</NavItem></LinkContainer>
				]
			);
		}
	}

	render() {
		return (
			<div>
				<Navbar fluid>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to={'/'}>What to Cook</Link>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<LinkContainer to={'/recipesearchlist'}><NavItem>Recipe Search</NavItem></LinkContainer>
						{this.props.authenticated ? <LinkContainer to={'/favourites'}><NavItem>Favourites</NavItem></LinkContainer> : null}
					</Nav>
					<Nav pullRight>
						{this.headerLinks()}
					</Nav>
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		user: state.user.email
	};
}

export default connect(mapStateToProps, actions)(NavBar);