// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Links</a></li>
              <li><a href="#">Subscribe</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
