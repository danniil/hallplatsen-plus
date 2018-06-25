import {
  FETCHING_STOPS_INITIATED,
  FETCHING_STOPS_RECEIVED,
  FETCHING_STOPS_FINISHED
} from './types';
import { url, headers } from '../config/api';

export const fetchSearchStops = input => dispatch => {
  let args = `location.name?input=chalmers&format=json`;
  fetch(url + args, {
    method: 'GET',
    headers: headers
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCHING_STOPS_RECEIVED,
        payload: data.LocationList.StopLocation
      })
    )
    .catch(err => console.log(err));
};

export const addSingleStop = input => dispatch => {
  dispatch({
    type: FETCHING_STOPS_RECEIVED,
    payload: [{ name: input }]
  });
};
