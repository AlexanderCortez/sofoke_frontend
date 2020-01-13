import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';
import { Full } from './container/Full';

const Content = (props) => (
  <MainWrapper {...props}>
    <Full />
  </MainWrapper>
)

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Content} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
