// Menu.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Menu = ({ loggedInUser, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(navigate);  // Call the logout function with navigation
  };

  return (
    <div className="menu-page">
      <div className="container">
        {loggedInUser ? (
          <>
            <h2>Welcome, {loggedInUser.name}!</h2>
            <Link to="/profile">View Profile</Link> {/* Link to Profile */}
            <br />
            <Link to="/preferredGender">
              <button>Discover</button> {/* Button to Discover */}
            </Link>
            <Link to="/savedUsers">
              <button>Saved Users</button> {/* Button to Saved Users */}
            </Link>
            <Link to="/chat">
              <button>Chat</button> {/* New Chat Button */}
            </Link>
            <button onClick={handleLogoutClick}>Logout</button> {/* Logout button */}
          </>
        ) : (
          <h2>Welcome, Guest!</h2>
        )}
      </div>
    </div>
  );
};

export default Menu;
