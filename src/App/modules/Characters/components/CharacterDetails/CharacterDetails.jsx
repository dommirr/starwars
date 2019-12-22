import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import DetailsLayout from 'components/DetailsLayout';
import ContentLoading from 'components/ContentLoading';
import Error from 'components/Error';

const CharacterDetails = ({ character, loading, onChangeId, error }) => {
  const { id } = useParams();

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    onChangeId(id);
  }, [id, onChangeId]);

  if (error) return (
    <Error onReload={() => onChangeId(id)} />
  );

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