import { combineReducers } from 'redux';
import movies from 'components/Movies/reducer';
import characters from 'components/Characters/reducer';

export default combineReducers({
  movies,
  characters
});