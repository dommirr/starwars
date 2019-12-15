import SwapiService from 'services/SwapiService';

import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTERS_SEARCH_SUCCESS,
} from './constants';

export const fetchCharactersStart = () => ({
  type: FETCH_CHARACTERS_START,
});

export const fetchCharactersSuccess = (characters, count, page) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  characters,
  count,
  page,
});

export const fetchCharactersSearchSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SEARCH_SUCCESS,
  characters,
});

export const fetchCharactersError = () => ({
  type: FETCH_CHARACTERS_ERROR,
});

export const fetchCharacters = () => async (dispatch, getState) => {
  dispatch(fetchCharactersStart());
  const state = getState();
  const { page } = state.characters;
  try {
    const { characters, count } = await SwapiService.getCharacters(page + 1);
    dispatch(fetchCharactersSuccess(characters, count, page + 1));
  } catch (err) {
    console.warn(err);
    dispatch(fetchCharactersError());
  }
};

export const fetchSearchCharacters = (text) => async (dispatch) => {
  dispatch(fetchCharactersStart());
  try {
    const { characters } = await SwapiService.getSearchCharacters(text);
    dispatch(fetchCharactersSearchSuccess(characters));
  } catch (err) {
    console.warn(err);
    dispatch(fetchCharactersError());
  }
};
