// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure this path is correct

const Home = ({ loggedInUser }) => {
  return (
    <div className="home-container">
      <h1>Welcome to ~(ME)</h1>

      {/* Conditionally render buttons if user is not logged in */}
      {!loggedInUser ? (
        <div className="button-container">
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      ) : (
        <h2>Welcome back, {loggedInUser.name}!</h2>
      )}

      {/* Add About and Contact buttons at the bottom */}
      <div className="footer-buttons">
        <button className="footer-button">
          <Link to="/about">About</Link>
        </button>
        <button className="footer-button">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
