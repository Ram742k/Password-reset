import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import userServices from '../services/userServices';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');
    labels.forEach(label => {
      label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    userServices.login(email, password)
      .then(response => {
        
        alert('Login successful');
        // Handle successful login

    })
      .catch(error => {
        console.error(error);
        // Handle login error
    })

    }
  

  return (
    
      <div className='card'>
      <form  onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-control">
          <input type="email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <label>Password</label>
        </div>


        <button className="btn">Login</button>
        {/* forgot password link */}
        <div className='link-section'>
        Don't have an account? &nbsp; &nbsp; <Link to={'/register'}>Register</Link>
        </div>
        <div className='link-section'>
        <Link to={'/forgot-password'}>Forgot Password</Link>
        </div>
         
        



        
      </form>
      </div>
    
  );
};

export default ForgotPassword;
