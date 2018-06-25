import {
  FETCHING_STOPS_INITIATED,
  FETCHING_STOPS_FINISHED,
  FETCHING_STOPS_RECEIVED
} from '../actions/types';

const initialState = {
  stops: [],
  isLoading: false
};

const stopsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCHING_STOPS_INITIATED:
      return { ...state, isLoading: true };
    case FETCHING_STOPS_RECEIVED:
      return { ...state, stops: state.stops.concat(action.payload) };
    case FETCHING_STOPS_FINISHED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default stopsReducer;
