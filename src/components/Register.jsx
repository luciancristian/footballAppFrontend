import React from 'react';
import './LoginRegister.css';
import registerLogo from '../img/giphyRegister.gif';

class Register extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            otp: ''
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
    updateOTP(event) {
        this.setState({otp: event.target.value});
    }

    render () {
        const {username, email, password} = this.state;
        const {submitLoginForm} = this.props;

        return (
       
            <form className="user-login-form" onSubmit={(event) => submitLoginForm(event, username, email, password)}>
                
                <div className="imgcontainer">
                    <img src={registerLogo} alt="Avatar" className="avatarRegister"/>
                </div>

                <div className="login">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter Username" onChange={(event) => this.updateUsername(event)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter Email" onChange={(event) => this.updateEmail(event)}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={(event) => this.updatePassword(event)}/>
                    <label htmlFor="otp">OTP:</label>
                    <input type="text" name="otp" placeholder="Enter Provided OTP" onChange={(event) => this.updateOTP(event)}/>
                    <button type="submit">Register</button>
                </div>
            </form>


        )
    }
}

export default Register;