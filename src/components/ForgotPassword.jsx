import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import userServices from '../services/userServices';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');

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

    userServices.getEmail(email)
    .then(response => {
        alert("Reset link sent to your email")
        console.log(response)
        setEmail('');
    })
    .catch(error => {
        console.log(error)
    })

    }
  

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <label>Email</label>
        </div>


        <button className="btn">Send Reset Link</button>
        <div className='link-section'>
        <Link to={'/'}>Back to login</Link>
        </div>
        
      </form>
    </div>
  );
};

export default ForgotPassword;
