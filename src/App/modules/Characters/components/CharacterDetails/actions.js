import SwapiService from 'services/SwapiService';

import {
  FETCH_CHARACTERS_DETAILS_START,
  FETCH_CHARACTERS_DETAILS_SUCCESS,
  FETCH_CHARACTERS_DETAILS_ERROR,
} from '../../constants';

export const fetchCharacterDetailsStart = () => ({
  type: FETCH_CHARACTERS_DETAILS_START,
});

export const fetchCharacterDetailsSucces = (info) => ({
  type: FETCH_CHARACTERS_DETAILS_SUCCESS,
  info,
});

export const fetchCharacterDetailsError = () => ({
  type: FETCH_CHARACTERS_DETAILS_ERROR,
});

export const fetchCharacterDetails = (id) => async dispatch => {
  dispatch(fetchCharacterDetailsStart());
  try {
    const character = await SwapiService.getCharacterById(id);
    dispatch(fetchCharacterDetailsSucces(character));
  } catch (err) {
    console.warn(err);
    dispatch(fetchCharacterDetailsError());
  }
};