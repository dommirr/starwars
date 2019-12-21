import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AppReducer from './App.reducer';

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

