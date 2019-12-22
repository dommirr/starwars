import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import ContentLoading from 'components/ContentLoading';
import DetailsLayout from 'components/DetailsLayout';
import Error from 'components/Error';

const MovieDetails = ({ movie, loading, error, fetchMovieDetail }) => {
  const { id } = useParams();
  const {
    director,
    producer,
    release_date,
    episode_id,
    title,
    description
  } = movie || {};


  useEffect(() => {
    fetchMovieDetail(id);
  }, [id, fetchMovieDetail]);

  if (error) return (
    <Error onReload={() => fetchMovieDetail(id)} />
  );

  if (loading) return (
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
    />
  );
}

export default MovieDetails;