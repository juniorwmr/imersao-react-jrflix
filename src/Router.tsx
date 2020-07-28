import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route component={() => (<div><h1>PAGE NOT FOUND</h1></div>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;