import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import AppLayout from 'components/AppLayout';
import Nav from 'components/Nav';

import { Movies, Characters } from './modules';

import { isMobile } from 'utils';

const AppRouter = () => (
  <Router>
    <AppLayout leftPanel={<Nav />}>
      <Switch>
        {!isMobile() && (
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        )}
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
    </AppLayout>
  </Router>
);

export default AppRouter;
