import SwapiService from 'services/SwapiService';

import {
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
} from '../../constants';

export const fetchMovieDetailStart = () => ({
  type: FETCH_MOVIE_DETAILS_START,
});

export const fetchMovieDetailSucces = (info) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  info,
});

export const fetchMovieDetailError = () => ({
  type: FETCH_MOVIE_DETAILS_ERROR,
});

export const fetchMovieDetail = (id) => async dispatch => {
  dispatch(fetchMovieDetailStart());
  try {
    const movie = await SwapiService.getMovieById(id);
    dispatch(fetchMovieDetailSucces(movie));
  } catch (err) {
    console.warn(err);
    dispatch(fetchMovieDetailError());
  }
};