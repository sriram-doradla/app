import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const predefinedUsers = [
  { name: 'John Doe', age: 25, gender: 'male', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', interests: ['Music', 'Traveling', 'Sports'] },
  { name: 'Jane Smith', age: 28, gender: 'female', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg', interests: ['Reading', 'Cooking', 'Yoga'] },
  { name: 'Sam Wilson', age: 22, gender: 'male', imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg', interests: ['Gaming', 'Technology', 'Music'] },
  { name: 'Sarah Johnson', age: 26, gender: 'female', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', interests: ['Fitness', 'Art', 'Traveling'] },
  // Additional users
  { name: 'Michael Brown', age: 30, gender: 'male', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', interests: ['Cycling', 'Movies', 'Hiking'] },
  { name: 'Emily Davis', age: 24, gender: 'female', imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg', interests: ['Photography', 'Dancing', 'Reading'] },
  { name: 'David Martinez', age: 29, gender: 'male', imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg', interests: ['Running', 'Video Games', 'Music'] },
  { name: 'Olivia Anderson', age: 27, gender: 'female', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', interests: ['Yoga', 'Cooking', 'Traveling'] },
  { name: 'James Clark', age: 31, gender: 'male', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', interests: ['Football', 'Music', 'Traveling'] },
  { name: 'Sophia Lee', age: 23, gender: 'female', imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg', interests: ['Fashion', 'Fitness', 'Photography'] }
];

const SwipeCards = ({ onSwipeRight, registeredUsers = [] }) => {
  const { state } = useLocation();
  const preferredGender = state?.selectedGender || 'male'; // Default to 'male' if no preference is passed

  // Merge predefined users and registered users
  const allUsers = [...predefinedUsers, ...registeredUsers];

  // Filter users based on preferred gender
  const filteredUsers = allUsers.filter(user => user.gender === preferredGender);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeRightAction = () => {
    if (currentIndex < filteredUsers.length) {
      const swipedUser = filteredUsers[currentIndex];
      onSwipeRight(swipedUser); // Pass the swiped user to the parent component to save
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeLeftAction = () => {
    if (currentIndex < filteredUsers.length) {
      setCurrentIndex(currentIndex + 1); // Just move to the next user
    }
  };

  return (
    <div className="swipe-cards">
      <h2>Swipe {preferredGender === 'male' ? 'Males' : 'Females'}</h2>
      {filteredUsers.length > 0 && currentIndex < filteredUsers.length ? (
        <div className="card">
          <img 
            src={filteredUsers[currentIndex].imageUrl || 'https://via.placeholder.com/150'} 
            alt={filteredUsers[currentIndex].name} 
            className="profile-pic" 
          />
          <h3>{filteredUsers[currentIndex].name}</h3>
          <p>Age: {filteredUsers[currentIndex].age}</p>
          <p>Interests: {filteredUsers[currentIndex].interests.join(', ')}</p>
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
