import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reservation details from your API when the component mounts
    axios.get('http://localhost:8000/api/showbooking')
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching booking details:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading booking details...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Date</th>
              <th>Seat Number</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.movie}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.seatNumber}</td>
                <td>{booking.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No bookings available.</div>
      )}
    </div>
  );
};

export default BookingDetails;
