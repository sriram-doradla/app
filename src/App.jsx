import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Menu from './Menu';
import Profile from './Profile';
import About from './About';
import ContactUs from './ContactUs';
import PreferredGender from './PreferredGender';
import SwipeCards from './SwipeCards';  // Import SwipeCards component
import SavedUsers from './SavedUsers';  // Import SavedUsers component
import Chat from './Chat';  // Import the Chat component

const App = () => {
  const [users, setUsers] = useState([]);  // Registered users
  const [loggedInUser, setLoggedInUser] = useState(null);  // Currently logged-in user
  const [savedUsers, setSavedUsers] = useState([]);  // Users saved via swiping right

  // Handle new user registration
  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    alert('User registered successfully! Please login.');
  };

  // Handle user login
  const handleLogin = (userId, password, navigate) => {
    const user = users.find((u) => u.userId === userId && u.password === password);
    if (user) {
      setLoggedInUser(user);
      alert('Logged in successfully!');
      navigate('/menu');  // Navigate to menu upon successful login
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle swiping right (save user profile)
  const handleSwipeRight = (user) => {
    if (!savedUsers.find(savedUser => savedUser.name === user.name)) {
      setSavedUsers([...savedUsers, user]);  // Add user to saved list if not already saved
    }
  };

  // Handle user logout
  const handleLogout = (navigate) => {
    setLoggedInUser(null);  // Clear logged-in user state
    alert('Logged out successfully!');  // Optionally notify the user
    navigate('/');  // Redirect to the home page after logout
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home loggedInUser={loggedInUser} />} />

          {/* Registration and Login routes */}
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Menu and Profile routes */}
          <Route 
            path="/menu" 
            element={<Menu loggedInUser={loggedInUser} onLogout={handleLogout} />} 
          />
          <Route path="/profile" element={<Profile user={loggedInUser} />} />

          {/* About, Contact, PreferredGender routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/preferredGender" element={<PreferredGender />} />

          {/* SwipeCards route (pass handleSwipeRight to manage swiped profiles and registered users) */}
          <Route 
            path="/swipeCards" 
            element={<SwipeCards onSwipeRight={handleSwipeRight} registeredUsers={users} />} 
          />

          {/* SavedUsers route (pass saved users to display them) */}
          <Route path="/savedUsers" element={<SavedUsers savedUsers={savedUsers} />} />

          {/* Chat route */}
          <Route path="/chat" element={<Chat />} /> {/* New Chat route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
