import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import Dashboard from './dashboard';

const Userlogin = () => {
  const [email, setEmail] = useState(''); // Changed variable name to 'email'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/log', {
        email, // Updated to 'email'
        password,
      });

      if (response.status === 200) {
        navigate('/booking');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label> {/* Updated label text to 'Email' */}
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updated to 'setEmail'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
