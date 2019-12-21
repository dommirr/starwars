import { combineReducers } from 'redux';
import movies from './modules/Movies/reducer';
import characters from './modules/Characters/reducer';

export default combineReducers({
  movies,
  characters
});