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
import ToDoFirebaseView from './ToDoFirebaseView'
import App from './App';
import ToDoView from './ToDoView'
import registerServiceWorker from './registerServiceWorker';
setupFirebase();

ReactDOM.render(
    <Router>
        <div>


            <Switch>
                <Route exact path="/" component={App}/>

            </Switch>

            <ToDoView/>

            <p>&copy; 2017 Robert Cisek</p>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
