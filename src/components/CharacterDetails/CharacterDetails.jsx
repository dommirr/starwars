import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SwapiService from 'services/SwapiService';
import DetailsLayout from 'components/DetailsLayout';
import ContentLoading from 'components/ContentLoading';

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
    <ContentLoading />
  );

  const details = [
    {
      label: 'Altura (cm)',
      value: character.height
    },
    {
      label: 'Color de ojos',
      value: character.eye_color
    },
    {
      label: 'Color de cabello',
      value: character.hair_color
    },
    {
      label: 'Género',
      value: character.gender
    },
    {
      label: 'Color de piel',
      value: character.skin_color
    },
    {
      label: 'Peso (kg)',
      value: character.mass
    }, {
      label: 'Año de nacimiento',
      value: character.birth_year
    }
  ];

  return (
    <DetailsLayout
      title={character.name}
      details={details}
      movies={character.movies}
    />
  );
}

export default CharacterDetails;