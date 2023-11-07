import React, { useState, useEffect } from 'react';

function BookingComponent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Make an API request to fetch booking data
    fetch('http://localhost:8000/api/booking') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Booking Details</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <p>Date: {booking.date}</p>
            <p>Seat Number: {booking.seatNumber}</p>
            <p>User: {booking.user}</p>
            {booking.movie && (
              <div>
                <p>Movie Title: {booking.movie.title}</p>
                <p>Movie Description: {booking.movie.description}</p>
                {/* Add more movie details as needed */}
              </div>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingComponent;
