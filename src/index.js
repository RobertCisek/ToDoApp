import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import setupFirebase from './setupFirebase'
import ToDoFirebaseView from './ToDoFirebaseView/ToDoFirebaseView'
import App from './App';
import ToDoView from './ToDoView'
import Auth from './Auth'
import registerServiceWorker from './registerServiceWorker';
import SignOut from "./Auth/SignOut";
setupFirebase();

ReactDOM.render(
    <Router>
        <div>

            <Switch>
                <Auth>
                    <Route exact path="/" component={App}/>
                    <ToDoFirebaseView/>
                    <SignOut/>
               </Auth>
            </Switch>



            <p>&copy; 2017 Robert Cisek</p>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
