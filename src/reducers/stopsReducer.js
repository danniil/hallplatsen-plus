import {
  FETCHING_STOPS_INITIATED,
  FETCHING_STOPS_FINISHED
} from '../actions/types';

const initialState = {};

export default function stopsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_STOPS_INITIATED:
      return state;
    case FETCHING_STOPS_FINISHED:
      return state;
    default:
      return state;
  }
}
