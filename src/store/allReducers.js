import { combineReducers } from 'redux';

import reducerLevel1 from './reducers/reducerLevel1';

const allReducers = combineReducers({
  level1: reducerLevel1,
});

export default allReducers;
