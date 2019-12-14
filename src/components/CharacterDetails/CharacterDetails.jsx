import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.co/api/people/' + id)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setCharacter(json);
      })
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
    </div>
  );
}

export default CharacterDetails;