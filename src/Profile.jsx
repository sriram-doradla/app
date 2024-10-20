import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  const { name = "Guest", userId = "N/A", description = "No description available", gender = "not specified", interests = [], profileImage = null } = user || {};

  return (
    <div className="profile-page">
      <div className="container">
        <h2>Your Profile</h2>
        {user ? (
          <>
            <h3>Name: {name}</h3>
            <h4>User ID: {userId}</h4>
            <p><strong>Description:</strong> {description}</p>

            {/* Display gender */}
            <p><strong>Gender:</strong> {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>

            <h4>Interests:</h4>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>

            {profileImage && (
              <img src={profileImage} alt="Profile" className="profile-pic" />
            )}
          </>
        ) : (
          <p>Please log in to see your profile details.</p>
        )}
        
        {/* Button to go back to the menu */}
        <Link to="/menu">
          <button className="back-to-menu-button">Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;