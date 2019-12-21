import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import ContentLoading from 'components/ContentLoading';
import DetailsLayout from 'components/DetailsLayout';

const MovieDetails = ({ movie, loading, error, fetchMovieDetail }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetail(id);
  }, [id, fetchMovieDetail]);


  if (loading) return (
    <ContentLoading />
  );

  const details = [
    {
      label: 'Director',
      value: movie.director,
    },
    {
      label: 'Productor',
      value: movie.producer,
    },
    {
      label: 'Fecha de estreno',
      value: movie.release_date,
    },
    {
      label: 'Episodio número',
      value: movie.episode_id,
    },
  ];

  return (
    <DetailsLayout
      title={movie.title}
      details={details}
      description={movie.description}
    />
  );
}

export default MovieDetails;