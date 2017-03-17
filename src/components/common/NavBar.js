import React from 'react';
import SearchBar from './SearchBar';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

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
                            <a href="/">What to Cook</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                    </Nav>
                </Navbar>
                <SearchBar />
            </div>
        );
    }
}

export default NavBar;