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

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
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
                    <input type="text" name="username" placeholder="Enter Username" onChange={(event) => this.handleChange(event)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter Email" onChange={(event) => this.handleChange(event)}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={(event) => this.handleChange(event)}/>
                    <label htmlFor="otp">OTP:</label>
                    <input type="text" name="otp" placeholder="Enter Provided OTP" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Register</button>
                </div>
            </form>


        )
    }
}

export default Register;