import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './adminLoginForm.css'; // Import your CSS file here

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/adminlog', {
        email,
        password,
      });

      if (response.status === 200) {
        navigate('/dasboard'); 
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className="centered-container"> {/* Added a centered-container div */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
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
    </div>
  );
};

export default AdminLoginForm;
