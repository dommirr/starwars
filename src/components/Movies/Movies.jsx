import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import MovieDetails from '../MovieDetails';
import './styles.css';

const Movies = () => {
  return (
    <div className="card movies">
      <div className="movies-leftpanel">
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Buscar" aria-describedby="emailHelp" />
            </div>
          </div>
          <Link to="/movies/1" className="list-group-item list-group-item-action">Movie 1</Link>
          <Link to="/movies/2" className="list-group-item list-group-item-action">Movie 2</Link>
        </div>
      </div>
      <div className="movies-content">
        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Movies;
