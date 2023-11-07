import React, { useState } from 'react';
import axios from 'axios'; // You need to install Axios or use your preferred HTTP library

const MovieReservationForm = () => {
  const [formData, setFormData] = useState({
    movieId: '',
    customerName: '',
    seatCount: 0,
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/reserve', formData); // Adjust the API endpoint as needed

      if (response.data.success) {
        setMessage('Movie ticket reserved successfully');
        // You can reset the form or perform any other necessary actions here
      } else {
        setMessage('Error: ' + response.data.message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Movie Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieId">Movie ID:</label>
          <input
            type="text"
            id="movieId"
            name="movieId"
            value={formData.movieId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="seatCount">Seat Count:</label>
          <input
            type="number"
            id="seatCount"
            name="seatCount"
            value={formData.seatCount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Reserve Ticket</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default MovieReservationForm;
