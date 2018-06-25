import {
  FETCHING_LOCATIONS_INITIATED,
  FETCHING_LOCATIONS_FINISHED
} from '../actions/types';

const initialState = {};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_LOCATIONS_INITIATED:
      return state;
    case FETCHING_LOCATIONS_FINISHED:
      return state;
    default:
      return state;
  }
}
