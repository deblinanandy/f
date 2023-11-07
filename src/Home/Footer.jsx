import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="/">Home</a></li>
              <li className="footer-link-item"><a href="/about">About Us</a></li>
              <li className="footer-link-item"><a href="/services">Services</a></li>
              <li className="footer-link-item"><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
