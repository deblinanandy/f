import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Register from './user/Register';
import H from './Home/H';
import Footer from './Home/Footer';
import MovieList from './Home/ShowMovieUrl';
import AdminLoginForm from './Admin/AdminLOgin';
import Dashboard from './Admin/dashboard';
import Userlogin from './user/Userlogin';
import Booking from './user/Booking';
//import BookingList from "./user/BookingDetails"
import AdminNavbar from './Admin/AdminNavbar'; 
import AddMovie from './Admin/Addmovie';
import AddReservation from './user/BookingDetails';
//import BookingDetails from './user/AddReservation';
import MovieAdmin from './Admin/MovieAdmin';
import MovieReservationForm from './Home/MovieReservationForm';
import SearchBookings from './user/SearchBookings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <MovieReservationForm />
         
                <H />
                <MovieList />
                <Footer />
              </>
            }
            
          />
          
 <Route
            path="/details"
            element={
              <>
                <AdminNavbar />
                <H />
                <MovieAdmin />
                <Footer />
              </>
            }
            
          />
          


          <Route
            path="/booking-details"
            element={
              <>
                <Navbar />
                <H />
                < AddReservation/>
                <Footer />
              </>
            }
            
          />
          


          
              <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <H />
                <Booking/>
                <Footer />
              </>
            }
            
          />
          
          <Route
            path="/registration"
            element={
              <>
                <Navbar />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin/*"
            element={
              <>
                <Navbar />
                <H/>
                <AdminLoginForm/>
               <Footer/>
                <Outlet />
              </>
            }
          />
          <Route
            path="/dasboard/*"
            element={
              <>
                <AdminNavbar />
                <H/>
                <Dashboard/>
                 <Footer/>
                <Outlet /> 
              </>
            }
            
          />
          <Route
            path="/addmovies/*"
            element={
              <>
                <AdminNavbar />
                <H/>
                <AddMovie/>
                 <Footer/>
                <Outlet /> 
              </>
            }
            
          />
          <Route
            path="/user"
            element={
              <>
                <Navbar />
                <H />
                <Userlogin />
                       <SearchBookings/>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
