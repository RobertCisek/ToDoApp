import React from 'react'
import logo from './logo.svg';

class AppHeader extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">This is simple React + Firebase Application to do list tasks</h1>

                </header>

            </div>

        )
    }
}

export default AppHeader