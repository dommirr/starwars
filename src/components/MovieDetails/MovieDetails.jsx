import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SwapiService from 'services/SwapiService';

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
    <h2>loading...</h2>
  );
  return (
    <div className="card-body">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Productor: {movie.producer}</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}

export default MovieDetails;