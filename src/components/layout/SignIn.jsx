import React from 'react';
import {NavLink} from 'react-router-dom';

function SignIn()  {
    return (
        <div>
        <ul className="left">
            <li><NavLink to='/championship'>Championship table</NavLink></li>
            <li><NavLink to='/insert'>Insert match</NavLink></li>
        </ul>
        <ul className="right">
            <li><NavLink to='/logout'>Logout</NavLink></li>
            <li><NavLink to='/home' className='btn btn-floating red lighten-1 pulse'>NN</NavLink></li>
        </ul>
        </div>
    );
}

export default SignIn;