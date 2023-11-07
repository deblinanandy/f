import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingDetails = ({ bookingId, movieId }) => {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Make an Axios GET request to fetch the booking details using the provided bookingId and movieId
    axios.get(`http://localhost:8000/api/showbooking/${bookingId}?movieId=${movieId}`)
      .then((response) => {
        setBookingData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [bookingId, movieId]);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Booking Details</h2>
      <div>
        <img src={bookingData.movie.postUrl} alt={bookingData.movie.title} />
        <h3>{bookingData.movie.title}</h3>
        <p>{bookingData.movie.description}</p>
        <p>Release Date: {new Date(bookingData.movie.releaseDate).toLocaleDateString()}</p>
      </div>
      <div>
        <h3>Booking Information</h3>
        <p>Date: {bookingData.date}</p>
        <p>Seat Number: {bookingData.seatNumber}</p>
        <p>User: {bookingData.user}</p>
        <p>Booking Time: {new Date(bookingData.bookingTime).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
