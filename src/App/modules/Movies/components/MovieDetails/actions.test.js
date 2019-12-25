import {
  fetchMovieDetailStart,
  fetchMovieDetailSucces,
  fetchMovieDetailError,
  fetchMovieDetail,
} from './actions';

import {
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
} from '../../constants';

import SwapiService from 'services/SwapiService';

jest.mock('services/SwapiService', () => ({
  getMovieById: () => Promise.resolve({ title: 'movie 1' }),
}));

describe('Actions Movie Details', () => {
  it('should fetchMovieDetailStart return the correct object', () => {
    const expected = {
      type: FETCH_MOVIE_DETAILS_START,
    };

    expect(fetchMovieDetailStart()).toEqual(expected);
  });

  it('should fetchMovieDetailSucces return the correct object', () => {
    const movie = { title: 'movie 1' };
    const expected = {
      type: FETCH_MOVIE_DETAILS_SUCCESS,
      info: movie,
    };

    expect(fetchMovieDetailSucces(movie)).toEqual(expected);
  });

  it('should fetchMovieDetailError return the correct object', () => {
    const expected = {
      type: FETCH_MOVIE_DETAILS_ERROR,
    };

    expect(fetchMovieDetailError()).toEqual(expected);
  });

  it('should fetchMovieDetail dispatch fetchstart and fecthSuccess', async () => {
    SwapiService.getMovieById = () => Promise.resolve({ title: 'movie 1' });
    const dispatch = jest.fn();
    await fetchMovieDetail(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIE_DETAILS_START" });
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIE_DETAILS_SUCCESS", info: { title: 'movie 1' } });
  });

  it('should fetchMovieDetail dispatch fetchstart and fecthError', async () => {
    SwapiService.getMovieById = () => Promise.reject({ error: 'error' });
    const dispatch = jest.fn();
    await fetchMovieDetail(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIE_DETAILS_START" });
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIE_DETAILS_ERROR" });
  });
});
