import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieAdmin = () => {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const adminApiUrl = 'http://localhost:8000/api/addmovieAdmin';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminResponse = await axios.get(adminApiUrl);
        setAdminData(adminResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteAll = async () => {
    try {
      await axios.delete("http://localhost:8000/api/delete");
      setAdminData([]);
    } catch (err) {
      setError(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Admin Movies</h1>
      <button onClick={handleDeleteAll}>Delete All Data</button>

      {adminData.map((admin) => (
        <div key={admin._id}>
          <h2>Email: {admin.email}</h2>
          <h2>Admin Movies:</h2>
          <ul>
            {admin.addMovies.map((movie) => (
              <li key={movie._id}>
                <h3>Title: {movie.title}</h3>
                <p>Description: {movie.description}</p>
                <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                <img src={movie.postUrl} alt={movie.title} style={{ maxWidth: '100%', height: 'auto' }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieAdmin;
