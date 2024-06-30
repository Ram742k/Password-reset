import axios from 'axios';

BASE_URL = 'https://password-reset-be-mgan.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { instance };
