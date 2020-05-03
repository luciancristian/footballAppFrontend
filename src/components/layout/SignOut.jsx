import React from 'react';
import {NavLink} from 'react-router-dom';

function SignOut()  {
    return (
        <div>
        <ul className="left">
            <li>Welcome!</li>
        </ul>
        <ul className="right">
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
        </div>
    );
}

export default SignOut;