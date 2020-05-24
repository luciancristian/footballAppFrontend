import React from 'react';
import './LoginRegister.css';
import loginLogo from '../img/giphyLogin.gif';
import AuthenticationService from './AuthenticationService.jsx';
import Navbar from './layout/Navbar.jsx';

class Login extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: 'test',
            email: 'test@test.com',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
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

    submitLoginForm() {
    
        if(this.state.username==='test' && this.state.password==='test'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/home/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render () {
       
        return (
            <div>
            <Navbar/>
            <form className="user-login-form" onSubmit={() => this.submitLoginForm()}>
                
                <div className="imgcontainer">
                    <img src={loginLogo} alt="Avatar" className="avatarLogin"/>
                </div>

                <div className="login" >
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter Username" onChange={(event) => this.handleChange(event)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter Email" onChange={(event) => this.handleChange(event)}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Login</button>
                </div>
            </form>
            </div>

        )
    }
}

export default Login;