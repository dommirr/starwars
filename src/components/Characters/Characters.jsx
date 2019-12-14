import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import CharacterDetails from '../CharacterDetails';

const Characters = () => {
  return (
    <div className="card movies">
      <div className="movies-leftpanel">
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Buscar" aria-describedby="emailHelp" />
            </div>
          </div>
          <Link to="/characters/1" className="list-group-item list-group-item-action">Personaje 1</Link>
          <Link to="/characters/2" className="list-group-item list-group-item-action">Personaje 2</Link>
        </div>
      </div>
      <div className="movies-content">
        <Switch>
          <Route path="/characters/:id">
            <CharacterDetails />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Characters;
