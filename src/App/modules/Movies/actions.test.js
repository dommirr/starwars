import {
  fetchMoviesStart,
  fetchMoviesSucces,
  fetchMoviesError,
  fetchMovies,
} from './actions';

import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './constants';

import SwapiService from 'services/SwapiService';

jest.mock('services/SwapiService', () => ({
  getMovies: () => Promise.resolve([{ title: 'movie 1' }]),
}));

describe('Actions Movies', () => {
  it('should fetchMovieStart return the correct object', () => {
    const expected = {
      type: FETCH_MOVIES_START,
    };

    expect(fetchMoviesStart()).toEqual(expected);
  });

  it('should fetchMoviesSucces return the correct object', () => {
    const expected = {
      type: FETCH_MOVIES_SUCCESS,
      movies: [{ title: 'movie 1' }],
    };

    expect(fetchMoviesSucces([{ title: 'movie 1' }])).toEqual(expected);
  });

  it('should fetchMoviesError return the correct object', () => {
    const expected = {
      type: FETCH_MOVIES_ERROR,
    };

    expect(fetchMoviesError()).toEqual(expected);
  });

  it('should fetchMovies dispatch fetchstart and fecthSuccess', async () => {
    SwapiService.getMovies = () => Promise.resolve([{ title: 'movie 1' }]);
    const dispatch = jest.fn();
    await fetchMovies()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIES_START" });
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIES_SUCCESS", movies: [{ title: 'movie 1' }] });
  });

  it('should fetchMovies dispatch fetchstart and fecthError', async () => {
    SwapiService.getMovies = () => Promise.reject({ error: 'error' });
    const dispatch = jest.fn();
    await fetchMovies(1)(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIES_START" });
    expect(dispatch).toBeCalledWith({ type: "FETCH_MOVIES_ERROR" });
  });
});
