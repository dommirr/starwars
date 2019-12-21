import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTERS_SEARCH_SUCCESS,
  FETCH_CHARACTERS_DETAILS_START,
  FETCH_CHARACTERS_DETAILS_SUCCESS,
  FETCH_CHARACTERS_DETAILS_ERROR,
} from './constants';

const initialState = {
  error: false,
  loading: true,
  list: [],
  list_filtered: [],
  count: null,
  page: 0,
  details: {
    error: false,
    loading: true,
    info: {},
  }
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return { ...state, error: false, loading: true };
    case FETCH_CHARACTERS_SUCCESS:
      const { characters, count, page } = action;
      return {
        ...state,
        list: [...state.list, ...characters],
        count,
        page,
        error: false,
        loading: false,
      };
    case FETCH_CHARACTERS_SEARCH_SUCCESS:
      return { ...state, list_filtered: action.characters, error: false, loading: false };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: true, loading: false };
    case FETCH_CHARACTERS_DETAILS_START:
      return {
        ...state,
        details: {
          error: false,
          loading: true,
        },
      };
    case FETCH_CHARACTERS_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          error: false,
          loading: false,
          info: action.info,
        },
      };
    case FETCH_CHARACTERS_DETAILS_ERROR:
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

export default characterReducer;