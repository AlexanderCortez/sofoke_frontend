import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CookieComponent from '../components/cookies/Cookies';
import SofokeComponent from '../components/sofoke/Sofoke';

const Links = () => {
  return 'links';
}

export const Full = () => (
  <Switch>
    <Route path="/" exact component={CookieComponent} />
    <Route path="/sofoke" component={SofokeComponent} />
    <Route path="/cookies" component={CookieComponent} />
    <Route path="/links" component={Links} />
  </Switch>
);
