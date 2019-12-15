import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTERS_SEARCH_SUCCESS,
} from './constants';

const initialState = {
  status: '',
  loading: false,
  list: [],
  list_filtered: [],
  count: 0,
  page: 1,
  details: {
    status: '',
    loading: false,
    info: {},
  }
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return { ...state, status: 'PENDING', loading: true };
    case FETCH_CHARACTERS_SUCCESS:
      const { characters, count, page } = action;
      return {
        ...state,
        list: [...state.list, ...characters],
        count,
        page,
        status: 'SUCCESS',
        loading: false,
      };
    case FETCH_CHARACTERS_SEARCH_SUCCESS:
      return { ...state, list_filtered: action.characters, status: 'SUCCESS', loading: false };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, status: 'ERROR', loading: false };
    default:
      return state
  }
}

export default characterReducer;