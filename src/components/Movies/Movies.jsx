import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import MovieDetails from 'components/MovieDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import SwapiService from 'services/SwapiService';
import './styles.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filterBy, setFilterBy] = useState('');

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    const fetchMovies = async () => {
      if (movies.length === 0) {
        const movies = await SwapiService.getMovies();
        setMovies(movies);
      }
    }
    fetchMovies();
  });

  const onChangeFilter = (filterBy) => setFilterBy(filterBy);

  const filteredMovies = movies.filter(movie => {
    const titleUppercase = movie.title.toUpperCase();
    const filterByUpperCase = filterBy.toUpperCase();
    return (filterByUpperCase === '' || titleUppercase.indexOf(filterByUpperCase) !== -1);
  });

  return (
    <div className="card movies">
      <div className="movies-leftpanel border-right">
        <div className="card-body border-bottom">
          <Filter
            onChange={onChangeFilter} value={filterBy}
            placeholder="buscar en peliculas"
          />
        </div>
        <div className="list-group list-group-flush">

          {
            filteredMovies.map((movie) => (
              <CustomLink key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</CustomLink>
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
