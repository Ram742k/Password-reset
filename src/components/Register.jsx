import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userServices from '../services/userServices';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
    userServices.register(name, email, password)
    .then((response) => {
        console.log(response.data);
        setName('');
        setEmail('');
        setPassword('');
        alert('Registration successful');
        setTimeout(() => {
            navigate("/");
        }, 500);

    }).catch((error) => {
       alert(error.response.data.message);
       
    })
    
  };

  return (
    <div>
      <h2 >Register</h2>
      <form onSubmit={handleSubmit}>

      <div className="form-control">
          <input type="text"  
            value={name} onChange={(e) => setName(e.target.value)} required/>
          <label>Name</label>
        </div>

        <div className="form-control">
          <input type="email"  
            value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label>Email</label>
        </div>

        <div className="form-control">
          <input 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <label>Password</label>
        </div>
        <button type="submit" className='btn'>Register</button>

        <div className='link-section'>
        
        Already have an account?  <Link to={'/'}>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
