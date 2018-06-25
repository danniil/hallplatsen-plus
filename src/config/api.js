import { cred } from './cred';

const url = cred.DB_HOST;
const headers = {
  Authorization: `Bearer ${cred.DB_TOKEN}`
};

export { url, headers };
