import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  './App.css'
import "./assets/css/styles.css";
import "./assets/css/argon-dashboard-react.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import App from './Container/App';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore, {history} from './Store/configureStore'

import AuthContextProvider from "./Context/AuthContext";
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const mountNode = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <Router history={history}>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </Router>
        </ConnectedRouter>
    </Provider>,
    mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
