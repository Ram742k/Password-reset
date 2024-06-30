import axios from 'axios';

BASE_URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { instance };
