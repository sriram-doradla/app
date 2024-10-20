import React from 'react';
import { Link } from 'react-router-dom';
import './SwipeCards.css';


const SavedUsers = ({ savedUsers }) => {
  return (
    <div className="saved-users">
      <h2>Saved Profiles</h2>
      {savedUsers.length > 0 ? (
        savedUsers.map((user, index) => (
          <div key={index} className="saved-profile">
            <img src={user.imageUrl} alt={user.name} className="saved-profile-pic" />
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
