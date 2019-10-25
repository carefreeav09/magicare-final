import React from 'react'
import {withRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from "../../Routes/PrivateRoute";
import PublicRoute from "../../Routes/PublicRoute";
import MainLayout from "../../Components/Layouts/Layout";
import NavlessLayout from "../../Components/Layouts/Layout/Navless";

import {
    AsyncHome,
    AsyncLogin,
    AsyncSignUp
} from "./AsyncComponent";

const App = () => (
    <div>
        <Switch>
            <PublicRoute component={AsyncHome} layout={NavlessLayout} exact path='/' />
            <PublicRoute component={AsyncLogin} layout={MainLayout} exact path='/login' />
            <PublicRoute component={AsyncSignUp} layout={MainLayout} exact path='/signup' />
        </Switch>
    </div>
);

export default withRouter(App)