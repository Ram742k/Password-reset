import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userServices from '../services/userServices';
import { useNavigate, Link } from "react-router-dom";
const ResetPassword = () => {

  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

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


  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }
      await userServices.postResetPassword(token, password);
      setMessage('Password reset successful.');
      setTimeout(() => {
        navigate("/");
    }, 500);
      // Redirect to login page or show a success message

    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Failed to reset password.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
       

<div className="form-control">
          <input type="password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <label>Password</label>
        </div>
    
        <div className="form-control">
          <input type="password"  
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
          <label>Confirm Password</label>
        </div>
    
      
        <button type="submit" className='btn'>Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
