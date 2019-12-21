import SwapiService from 'services/SwapiService';

import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './constants';

export const fetchMoviesStart = () => ({
  type: FETCH_MOVIES_START,
});

export const fetchMoviesSucces = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMoviesError = () => ({
  type: FETCH_MOVIES_ERROR,
});

export const fetchMovies = () => async dispatch => {
  dispatch(fetchMoviesStart());
  try {
    const movies = await SwapiService.getMovies();
    dispatch(fetchMoviesSucces(movies));
  } catch (err) {
    console.warn(err);
    dispatch(fetchMoviesError());
  }
};