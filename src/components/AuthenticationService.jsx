class AuthenticationService {

    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('authenticatedPassword', password);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedPassword');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user);
        if(user===null) return false
        return true
    }
    getUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        return user.substring(0,3);
    }
}

export default new AuthenticationService()