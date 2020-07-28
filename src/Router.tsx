import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';
import CadastroCategoria from './pages/CadastroCategoria';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cadastro/video' component={CadastroVideo} />
        <Route exact path='/cadastro/categoria' component={CadastroCategoria} />
        <Route component={() => (<div><h1>PAGE NOT FOUND</h1></div>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;