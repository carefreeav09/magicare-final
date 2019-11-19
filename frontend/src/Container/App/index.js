import React from 'react'
import {withRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from "../../Routes/PrivateRoute";
import PublicRoute from "../../Routes/PublicRoute";
import MainLayout from "../../Components/Layouts/Layout";
import AdminLayout from "../../Components/Layouts/Layout/AdminLayout";
import NavlessLayout from "../../Components/Layouts/Layout/Navless";

import {
    AsyncHome,
    AsyncLogin,
    AsyncDashboard,
    AsyncVehicle,
    AsyncSignUp,
    AsyncInventory,
    AsyncTaxes
} from "./AsyncComponent";

const App = () => (
    <div>
        <Switch>
            <PublicRoute component={AsyncHome} layout={NavlessLayout} exact path='/' />
            <PublicRoute component={AsyncLogin} layout={MainLayout} exact path='/login' />
            <PublicRoute component={AsyncSignUp} layout={MainLayout} exact path='/signup' />
            <PrivateRoute component={AsyncDashboard} layout={AdminLayout} exact path='/dashboard' />
            <PrivateRoute component={AsyncVehicle} layout={AdminLayout} path='/vehicles' />
            <PrivateRoute component={AsyncInventory} layout={AdminLayout} path='/inventories' />
            <PrivateRoute component={AsyncTaxes} layout={AdminLayout} path='/taxes' />
        </Switch>
    </div>
);

export default withRouter(App)