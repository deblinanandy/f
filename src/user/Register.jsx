import React, { useState } from 'react';
import axios from 'axios';
import H from '../Home/H';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/reguser', { name, email, password });
      console.log(response.data);
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error(error);
      // Handle registration error (e.g., show an error message)
    }
  };

  return (
    <>
   <H/>
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
     
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Register</h2>
          <div className="form-group mt-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
      </div>
      </>
  );
};

export default Register;
