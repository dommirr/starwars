import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import DetailsLayout from 'components/DetailsLayout';
import ContentLoading from 'components/ContentLoading';
import Error from 'components/Error';

const CharacterDetails = ({ character, loading, onChangeId, error }) => {
  const { id } = useParams();
  const {
    id: characterId,
    name,
    movies,
    height,
    eye_color,
    hair_color,
    gender,
    skin_color,
    mass,
    birth_year,
  } = character || {};

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    onChangeId(id);
  }, [id, onChangeId]);

  if (error) return (
    <Error onReload={() => onChangeId(id)} />
  );

  if (loading || id !== characterId) return (
    <ContentLoading />
  );

  const details = [
    {
      label: 'Altura (cm)',
      value: height
    },
    {
      label: 'Color de ojos',
      value: eye_color
    },
    {
      label: 'Color de cabello',
      value: hair_color
    },
    {
      label: 'Género',
      value: gender
    },
    {
      label: 'Color de piel',
      value: skin_color
    },
    {
      label: 'Peso (kg)',
      value: mass
    }, {
      label: 'Año de nacimiento',
      value: birth_year
    }
  ];

  return (
    <DetailsLayout
      title={name}
      details={details}
      movies={movies}
      to="/characters"
    />
  );
}

export default CharacterDetails;