import React from 'react';
import './LoginRegister.css';
import loginLogo from '../img/giphyLogin.gif';

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }
    updateEmail(event) {
        this.setState({email: event.target.value});
    }
    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    render () {
        const {username, email, password} = this.state;
        const {submitLoginForm} = this.props;

        return (
       
            <form className="user-login-form" onSubmit={(event) => submitLoginForm(event, username, email, password)}>
                
                <div className="imgcontainer">
                    <img src={loginLogo} alt="Avatar" className="avatarLogin"/>
                </div>

                <div className="login">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter Username" onChange={(event) => this.updateUsername(event)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter Email" onChange={(event) => this.updateEmail(event)}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={(event) => this.updatePassword(event)}/>
                    <button type="submit">Login</button>
                </div>
            </form>


        )
    }
}

export default Login;