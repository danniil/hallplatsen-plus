import { combineReducers } from 'redux';

import departureReducer from './departureReducer';
import locationReducer from './locationReducer';
import stopsReducer from './stopsReducer';

const rootReducer = combineReducers({
  departureReducer,
  locationReducer,
  stopsReducer
});

export default rootReducer;
