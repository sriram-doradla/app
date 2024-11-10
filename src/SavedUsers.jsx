import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './SwipeCards.css';

const SavedUsers = () => {
  const [savedUsers, setSavedUsers] = useState([]);

  // Fetch saved users from the backend
  useEffect(() => {
    axios.get('https://ram-o7av.onrender.com') // Adjust the URL to your Express server
      .then(response => {
        setSavedUsers(response.data); // Assuming response.data is an array of saved users
      })
      .catch(error => {
        console.error('There was an error fetching saved users!', error);
      });
  }, []);

  return (
    <div className="saved-users">
      <h2>Saved Profiles</h2>
      {savedUsers.length > 0 ? (
        savedUsers.map((user, index) => (
          <div key={index} className="saved-profile">
            <img 
              src={user.profileImage || 'https://via.placeholder.com/150'} 
              alt={user.name} 
              className="saved-profile-pic" 
            />
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Interests: {user.interests.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No saved profiles</p>
      )}
      {/* Button to go back to the menu */}
      <Link to="/menu">
        <button className="back-to-menu-button">Back to Menu</button>
      </Link>
    </div>
  );
};

export default SavedUsers;
