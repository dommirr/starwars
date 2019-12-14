import React from 'react';
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  return (
    <h2>Character detail id: {id}</h2>
  );
}

export default CharacterDetails;