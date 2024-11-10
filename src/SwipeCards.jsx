import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const SwipeCards = () => {
  const { state } = useLocation();
  const preferredGender = state?.selectedGender || 'male'; // Default to 'male' if no preference is passed

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch users by preferred gender from the backend
  useEffect(() => {
    axios.get(`https://ram-o7av.onrender.com/api/users?gender=${preferredGender}`)
      .then(response => {
        setUsers(response.data); // Assuming response.data is an array of users
      })
      .catch(error => {
        console.error('There was an error fetching users!', error);
      });
  }, [preferredGender]);

  const handleSwipeRightAction = () => {
    if (currentIndex < users.length) {
      const swipedUser = users[currentIndex];
      axios.post('https://ram-o7av.onrender.com', { userId: swipedUser._id })
        .then(() => {
          setCurrentIndex(currentIndex + 1);
        })
        .catch(error => {
          console.error('Error saving user:', error);
        });
    }
  };

  const handleSwipeLeftAction = () => {
    if (currentIndex < users.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="swipe-cards">
      <h2>Swipe {preferredGender === 'male' ? 'Males' : 'Females'}</h2>
      {users.length > 0 && currentIndex < users.length ? (
        <div className="card">
          <img 
            src={users[currentIndex].profileImage || 'https://via.placeholder.com/150'} 
            alt={users[currentIndex].name} 
            className="profile-pic" 
          />
          <h3>{users[currentIndex].name}</h3>
          <p>Age: {users[currentIndex].age}</p>
          <p>Interests: {users[currentIndex].interests.join(', ')}</p>
          <div className="swipe-buttons">
            <button className="swipe-left" onClick={handleSwipeLeftAction}>Swipe Left</button>
            <button className="swipe-right" onClick={handleSwipeRightAction}>Swipe Right</button>
          </div>
        </div>
      ) : (
        <p>No more users to swipe</p>
      )}

      {/* Navigation to Saved Users and Menu */}
      <div className="navigation-buttons">
        <Link to="/savedUsers">
          <button className="view-saved-button">View Saved Profiles</button>
        </Link>
        <Link to="/menu">
          <button className="back-to-menu-button">Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default SwipeCards;
