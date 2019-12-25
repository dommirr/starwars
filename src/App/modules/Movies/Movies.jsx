import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import MovieDetails from './components/MovieDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import Layout from 'components/Layout';
import Message from 'components/Message';
import Error from 'components/Error';

const Movies = ({ movies, error, onMount, loading }) => {
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    if (movies.length === 0) {
      onMount();
    }
  }, [onMount, movies]);


  if (error) return (
    <Error onReload={onMount} />
  );

  const onChangeFilter = (filterBy) => setFilterBy(filterBy);

  const filteredMovies = movies.filter(movie => {
    const titleUppercase = movie.title.toUpperCase();
    const filterByUpperCase = filterBy.toUpperCase();
    return (filterByUpperCase === '' || titleUppercase.indexOf(filterByUpperCase) !== -1);
  });

  const panelHeader = (
    <Filter
      onChange={onChangeFilter} value={filterBy}
      placeholder="Buscar en peliculas"
    />
  );

  const panelList = filteredMovies.map((movie) => (
    <CustomLink key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</CustomLink>
  ));

  return (
    <Layout
      panelHeader={panelHeader}
      panelList={panelList}
      panelListLoading={loading}
    >
      <Switch>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/movies">
          <Message />
        </Route>
      </Switch>
    </Layout>
  )
};

Movies.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.bool,
  onMount: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default Movies;
