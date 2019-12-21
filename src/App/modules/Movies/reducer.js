import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIE_DETAILS_START,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
} from './constants';

const initialState = {
  error: false,
  loading: true,
  list: [],
  details: {
    error: false,
    loading: true,
    info: {},
  }
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, error: false, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, list: action.movies };
    case FETCH_MOVIES_ERROR:
      return { ...state, error: true, loading: false };
    case FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        details: {
          error: false,
          loading: true,
        },
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          error: false,
          loading: false,
          info: action.info,
        },
      };
    case FETCH_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        details: {
          error: true,
          loading: false,
        },
      }
    default:
      return state
  }
}

export default movieReducer;