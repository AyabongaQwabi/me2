
import React from 'react';
import { Route, Switch } from 'react-router';
 
// Module root components
import Home from '../components/pages/home';
import PageNotFound from '../components/pages/404page';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="*" component={PageNotFound} />
  </Switch>
);