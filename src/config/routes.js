import React from 'react';
import {RouteHandler, Link, IndexRoute, Route, Router, browserHistory} from 'react-router';
import Main from '../containers/main';
import Test from '../containers/test';
import Links from '../components/links';
import Default from '../components/default';
import NotFound from '../components/404';

//Routing Configuration
const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Default}/>
          <Route path="links" component={Links} />
        </Route>
        <Route path="/test" component={Test}/>
        <Route path="*" component={NotFound} />
    </Router>
)


export default Routes;
