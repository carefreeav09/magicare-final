import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import Dashboards from './DashboardContainer';

const Home = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={Dashboards} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Home;