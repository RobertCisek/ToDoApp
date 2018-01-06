import React from 'react'
import logo from './logo.svg';

class AppHeader extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">This is simple React Application to do list tasks</h1>
                <h1 className="App-title">You can start it!</h1>
            </header>
        )
    }
}

export default AppHeader