import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Link className="d-inline p-2 bg-dark text-white" to="/">Home</Link>
                <Link className="d-inline p-2 bg-dark text-white" to="/championship">ChampionshipTable</Link>
                <Link className="d-inline p-2 bg-dark text-white" to="/insert">InsertMatch</Link>
                <Link className="d-inline p-2 bg-dark text-white text-right" to="/login" >Logare</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
          
    );
}

export default Header;