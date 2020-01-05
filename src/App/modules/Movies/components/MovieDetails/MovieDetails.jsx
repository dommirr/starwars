import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import ContentLoading from 'components/ContentLoading';
import DetailsLayout from 'components/DetailsLayout';
import Error from 'components/Error';

const MovieDetails = ({ movie, loading, error, onMount }) => {
  const { id } = useParams();
  const {
    id: movieId,
    director,
    producer,
    release_date,
    episode_id,
    title,
    description
  } = movie || {};


  useEffect(() => {
    onMount(id);
  }, [id, onMount]);

  if (error) return (
    <Error onReload={() => onMount(id)} />
  );

  if (loading || movieId !== id) return (
    <ContentLoading />
  );

  const details = [
    {
      label: 'Director',
      value: director,
    },
    {
      label: 'Productor',
      value: producer,
    },
    {
      label: 'Fecha de estreno',
      value: release_date,
    },
    {
      label: 'Episodio número',
      value: episode_id,
    },
  ];

  return (
    <DetailsLayout
      title={title}
      details={details}
      description={description}
      to="/movies"
    />
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string,
    episode_id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onMount: PropTypes.func.isRequired
};

export default MovieDetails;