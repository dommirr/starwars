import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.co/api/films/' + id)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setMovie(json);
      })
  }, [id]);
  if (loading) return (
    <h2>loading...</h2>
  );
  return (
    <div className="card-body">
      <h2>{movie.title}</h2>
      <p>{movie.opening_crawl}</p>
      <p>Productor: {movie.producer}</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}

export default MovieDetails;