import { combineReducers } from 'redux';

import departureReducer from './departureReducer';
import locationReducer from './locationReducer';
import stopsReducer from './stopsReducer';

const rootReducer = combineReducers({
  departure: departureReducer,
  location: locationReducer,
  stops: stopsReducer
});

export default rootReducer;
