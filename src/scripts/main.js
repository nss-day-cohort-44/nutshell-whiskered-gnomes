import { RegisterForm } from "./auth/RegisterForm.js"
import { LoginForm } from "./auth/LoginForm.js"
import { Nutshell } from "./Nutshell.js"


/*
1. Check if the user is authenticated by looking in session storage for `activeUser`
2. If so, render the Nutshell component
3. If not, render the login and registration forms
4. Also, if the user authenticates, and the login form is initially shown
ensure that the Nutshell component gets rendered
*/


// Conditional statement that checks if there is an activeUser property in session storage.
//sessionStorage.setItem("userId", 1)
if (sessionStorage.activeUser) {
    Nutshell()
} else {
    RegisterForm()
    LoginForm()
}