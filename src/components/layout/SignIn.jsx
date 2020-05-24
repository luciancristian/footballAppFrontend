import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthenticationService from '../AuthenticationService.jsx';


//trebuie facuta clasa!!!!!!!!!
function SignIn()  {
    const user = AuthenticationService.getUserLoggedIn();
    
    // submitLogout() {
    
    //     if(this.state.username==='test' && this.state.password==='test'){
    //         AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //         this.props.history.push(`/home/${this.state.username}`)
    //         //this.setState({showSuccessMessage:true})
    //         //this.setState({hasLoginFailed:false})
    //     }
    //     else {
    //         this.setState({showSuccessMessage:false})
    //         this.setState({hasLoginFailed:true})
    //     }
    // }


    return (
        <div>
        <ul className="left">
            <li><NavLink to='/championship'>Championship table</NavLink></li>
            <li><NavLink to='/insert'>Insert match</NavLink></li>
        </ul>
        <ul className="right">
            <li><NavLink onClick={() => this.submitLogout()} to='/logout'>Logout</NavLink></li>
    <li><NavLink to={'/home/'+{user}} className='btn btn-floating red lighten-1 pulse'>{user}</NavLink></li>
        </ul>
        </div>
    );
}

export default SignIn;