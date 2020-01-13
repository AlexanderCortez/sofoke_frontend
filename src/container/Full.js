import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Sofoke = () => {
  return 'sofoke';
}

const Cookies = () => {
  return 'cookies';
}

const Links = () => {
  return 'links';
}

export const Full = () => (
  <Switch>
    <Route path="/" exact component={Sofoke} />
    <Route path="/sofoke" component={Sofoke} />
    <Route path="/cookies" component={Cookies} />
    <Route path="/links" component={Links} />
  </Switch>
);
