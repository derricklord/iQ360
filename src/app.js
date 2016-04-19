import React from 'react';
import ReactDOM from 'react-dom';
import {RouteHandler, Link, Route, Router} from 'react-router';
import Main from './containers/main';
import routes from './config/routes';

const app = document.getElementById('app');
ReactDOM.render((routes), app);


//ReactDOM.render(<Main/>, document.getElementById('app'));
