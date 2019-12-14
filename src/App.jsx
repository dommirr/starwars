import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from 'components/Nav';
import Movies from 'components/Movies';
import Characters from 'components/Characters';
import './App.css';

const App = () => (
  <Router>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2">
          <Nav />
        </div>
        <div className="col-md-10">
          <Switch>
            <Route exact path="/">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
