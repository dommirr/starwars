import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SwapiService from 'services/SwapiService';
import Loading from 'components/Loading';
import DetailsLayout from 'components/DetailsLayout';

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
    <div className="content-loading">
      <Loading />
    </div>
  );

  const details = [
    {
      label: 'Altura',
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
      label: 'Peso',
      value: character.mass
    }, {
      label: 'Añi de nacimientp',
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