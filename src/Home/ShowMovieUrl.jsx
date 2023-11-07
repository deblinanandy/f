import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make an HTTP request to fetch movie data from the API
    axios.get('http://localhost:8000/api/find')
      .then((response) => {
        setMovieData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movieData.map((movie) => (
        <div key={movie.id} className="card card-sm" style={{ width: '14rem', margin: '50px', marginTop: '180px', height: '30rem' }}>
          <img className="card-img-top" src={movie.postUrl} alt={movie.title} style={{ maxWidth: '100%', height: 'auto' }} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <NavLink to="/user">
              <button className="btn btn-primary">Book Movie</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
