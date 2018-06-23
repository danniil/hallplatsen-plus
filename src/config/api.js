import { cred } from './cred';

function GET(call) {
  return cred.DB_SECRET;
}

export { GET };
