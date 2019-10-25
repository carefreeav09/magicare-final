import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import Landing from './HomeContainer';

const Home = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={Landing} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Home;