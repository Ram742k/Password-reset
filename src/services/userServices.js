// userServices.js
import { instance } from './instance'; // Correct import statement

// Define the user services
const userServices = {
  // Function to send email for password reset
  getEmail: async (email) => {
    
    // Make a POST request to the reset-password endpoint
    return await instance.post('/users/', { email });
  },
  postResetPassword: async (token, password) => {
    return await instance.post(`/users/reset-password/${token}`, { password });
  },
  login: async (email, password) => {
    // make a POST request to the login endpoint
    return await instance.post('/users/login', {
        email,
        password
    }, { withCredentials: true });
},
register: async (name, email, password) => {
    
    // make a POST request to the register endpoint
    return await instance.post('/users/register', {
        name,
        email,
        password
    }, { withCredentials: true });
}
};

export default userServices; // Correct export statement
