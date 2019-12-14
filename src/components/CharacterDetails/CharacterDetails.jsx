import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SwapiService from 'services/SwapiService';
import LinkMovie from 'components/LinkMovie/LinkMovie';

const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setLoading(true);
    const fetchCharacter = async () => {
      const movie = await SwapiService.getCharacterById(id);
      setLoading(false);
      setCharacter(movie);
    };
    fetchCharacter();
  }, [id]);
  if (loading) return (
    <h2>loading...</h2>
  );
  return (
    <div className="card-body">
      <h2>{character.name}</h2>
      <p>Color de ojos: {character.eye_color}</p>
      <p>Altura: {character.height} cm</p>
      <p>Peso: {character.mass} kg</p>
      <h4>Pelícilas en las que apareció:</h4>
      {
        character.movies.map(movie => (
          <LinkMovie key={movie} id={movie} />
        ))
      }
    </div>
  );
}

export default CharacterDetails;