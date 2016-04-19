import React from 'react';
import {RouteHandler, Link, Route, Router, browserHistory} from 'react-router';
import Main from '../containers/main';
import Test from '../containers/test';
import Links from '../components/links';
import Default from '../components/default';

//Routing Configuration
const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="links" component={Links} />
          <Route path="default" component={Default} />
        </Route>
        <Route path="/test" component={Test}/>
    </Router>
)


export default Routes;
