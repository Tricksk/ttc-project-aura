import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login';
import Admin from '../pages/Admin/index';

const Routes: React.FC = () => {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}

export default Routes;