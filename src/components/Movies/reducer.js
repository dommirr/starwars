import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from './constants';

const initialState = {
  status: '',
  loading: false,
  list: [],
  details: {
    status: '',
    loading: false,
    info: {},
  }
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return { ...state, status: 'PENDING', loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, status: 'SUCCESS', loading: false, list: action.movies };
    case FETCH_MOVIES_ERROR:
      return { ...state, status: 'ERROR', loading: false };
    default:
      return state
  }
}

export default movieReducer;