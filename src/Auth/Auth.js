import React, { Component } from 'react'
import firebase from 'firebase'
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SignOut from './SignOut';

class Auth extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }



    render() {
        return (
            this.state.user
                ? this.props.children
                : (
                    <div>
                        <h1 className='welcome'> You can start it before SignUp or SignIn</h1>

                        <SignUpForm/>
                        <SignInForm/>
                        <SignOut/>
                    </div>
                )


        )
    }
}

export default Auth