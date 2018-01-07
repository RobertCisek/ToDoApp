import React, { Component } from 'react'

import firebase from 'firebase'

class SignOut extends Component {

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
            <div>
                {
                    this.state.user ?
                        <button onClick={() => firebase.auth().signOut()}>
                            Sign out
                        </button> : null
                }
            </div>


        )
    }
}

export default SignOut