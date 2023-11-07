import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBookings = () => {
  const [name, setName] = useState('');
  const [booking, setBooking] = useState(null);

  const handleSearch = () => {
    if (name) {
      // Fetch booking details from the API using Axios
      axios
        .get(`http://localhost:8000/api/s?name=${name}`)
        .then((response) => {
          const data = response.data.data.bookings[0]; // Assuming the response structure
          if (data) {
            setBooking(data);
          } else {
            setBooking(null); // Reset booking if no data is found
          }
        })
        .catch((error) => console.error(error));
    } else {
      setBooking(null); // Reset booking if the name is empty
    }
  };

  return (
    <div>
      <h1>Fetch Booking Details by Name</h1>
      <input
        type="text"
        placeholder="Enter a customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
      {booking && (
        <div>
          <h2>Booking Details:</h2>
          <p>Movie Title: {booking.movie ? booking.movie.title : 'N/A'}</p>
          <p>Description: {booking.movie ? booking.movie.description : 'N/A'}</p>
          <p>Release Date: {booking.movie ? new Date(booking.movie.releaseDate).toLocaleDateString() : 'N/A'}</p>
          <img src={booking.movie ? booking.movie.postUrl : 'N/A'} alt={booking.movie ? booking.movie.title : 'N/A'} />
          <p>Date: {new Date(booking.date).toLocaleString()}</p>
          <p>Customer Name: {booking.customerName}</p>
          <p>Seat Count: {booking.seatCount}</p>
          <p>Total Cost: {booking.totalCost}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBookings;
