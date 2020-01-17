import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CookieComponent from '../components/cookies/Cookies';

const Sofoke = () => {
  return 'sofoke';
}

const Links = () => {
  return 'links';
}

export const Full = () => (
  <Switch>
    <Route path="/" exact component={CookieComponent} />
    <Route path="/sofoke" component={Sofoke} />
    <Route path="/cookies" component={CookieComponent} />
    <Route path="/links" component={Links} />
  </Switch>
);
