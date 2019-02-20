import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import Profile from './Profile';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
