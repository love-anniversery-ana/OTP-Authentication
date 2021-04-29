import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginParent from './component/layout/login/LoginParent';
import HomeParent from './component/layout/home/HomeParent';
import SplashParent from './component/layout/splash/SplashParent';
import PrivateRoute from './component/helpers/axios/PrivateRoute';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SplashParent} />
        <Route path='/login' component={LoginParent} />
        <PrivateRoute path='/home' component={HomeParent} />
      </Switch>
    </Router>
  );
}
