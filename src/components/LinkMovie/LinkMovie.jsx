import React, { useState, useEffect } from 'react';
import SwapiService from 'services/SwapiService';
import { Link } from "react-router-dom";

const LinkMovie = ({ id }) => {
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
    <p>cargando...</p>
  );
  return (
    <p>
      <Link to={`/movies/${id}`}>{movie.title}</Link>
    </p>
  )
}

export default LinkMovie;
