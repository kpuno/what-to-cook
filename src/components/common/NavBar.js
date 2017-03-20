import React from 'react';
import SearchBar from './SearchBar';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

class NavBar extends React.Component {

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}>What to Cook</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem><Link to={'/recipesearchlist'}>Recipe Search List</Link></NavItem>
                        <NavItem>Link</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>username</NavItem>
                       <NavItem className="login">Login</NavItem>
                    </Nav>
                </Navbar>
                <SearchBar />
            </div>
        );
    }
}

export default NavBar;