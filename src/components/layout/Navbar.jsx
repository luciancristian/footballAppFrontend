import React from 'react';
import {Link} from 'react-router-dom';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AuthenticationService from '../AuthenticationService.jsx'

function Navbar()  {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container-fluid">
                <Link to='/' className="brand-logo center btn-large green">Football App</Link>
                {isUserLoggedIn && <SignIn/>}
                {!isUserLoggedIn && <SignOut/>}
            </div>
        </nav>
    );
}

export default Navbar;