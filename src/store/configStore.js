import allReducers from './allReducers';

import { initialState } from './initialState';

import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

const middleWareGeneral = store => next => action => next(action);

const INITIAL_STORE = compose(applyMiddleware(thunk, middleWareGeneral))(
  createStore
);

const store = INITIAL_STORE(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
