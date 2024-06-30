import axios from 'axios';



const instance = axios.create({
  baseURL: 'https://password-reset-be-mgan.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { instance };
