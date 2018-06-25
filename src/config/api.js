import { cred } from './cred';

const url = cred.DB_HOST;
const headers = {
  Authorization: `Bearer ${cred.DB_TOKEN}`
};

const GET = args => {
  return fetch(url + args, {
    method: 'GET',
    headers: headers
  }).then(res => {
    return res.json();
  });
};

function getLocations(input) {
  let args = `location.name?input=${input}&format=json`;
  return GET(args);
}

export { getLocations };
