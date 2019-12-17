import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SwapiService from 'services/SwapiService';
import Loading from 'components/Loading';
import DetailsLayout from 'components/DetailsLayout';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      const movie = await SwapiService.getMovieById(id);
      setLoading(false);
      setMovie(movie);
    };
    fetchMovie();
  }, [id]);
  if (loading) return (
    <div className="content-loading">
      <Loading />
    </div>
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