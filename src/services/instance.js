import axios from 'axios';



const instance = axios.create({
  baseURL: 'https://password-reset-be-9pu5.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { instance };
