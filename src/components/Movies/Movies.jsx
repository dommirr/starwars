import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import MovieDetails from 'components/MovieDetails';
import Filter from 'components/Filter';
import './styles.css';

const getIdFromUrl = (url) => url.substring(url.length - 2, url.length);

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    if (movies.length === 0) {
      fetch('https://swapi.co/api/films/')
        .then(response => response.json())
        .then(json => setMovies(json.results))
    }
  });
  return (
    <div className="card movies">
      <div className="movies-leftpanel">
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <Filter />
          </div>
          {
            movies.map((movie) => (
              <Link
                to={`/movies/${getIdFromUrl(movie.url)}`}
                className="list-group-item list-group-item-action">
                {movie.title}
              </Link>
            ))
          }
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
