import React from 'react';
import {Link} from 'react-router-dom';
import SignIn from './SignIn';
import SignOut from './SignOut';

function Navbar()  {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container-fluid">
                <Link to='/' className="brand-logo center btn-large green">Football App</Link>
                <SignIn/>
                <SignOut/>
            </div>
        </nav>
    );
}

export default Navbar;