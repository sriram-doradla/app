import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Menu from './Menu';
import Profile from './Profile';
import About from './About';
import ContactUs from './ContactUs';
import PreferredGender from './PreferredGender';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);  
  const [savedUsers, setSavedUsers] = useState([]);  

  const handleRegister = async (newUser) => {
    try {
      const response = await axios.post('/register', newUser);
      alert('User registered successfully! Please login.');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error registering user.');
    }
  };

  const handleLogout = (navigate) => {
    setLoggedInUser(null);  
    alert('Logged out successfully!');  
    navigate('/');  
  };

  const handleLogin = (user, navigate) => {
    setLoggedInUser(user);  // Set the logged-in user
    navigate('/menu', { state: { user } });  // Pass user to the menu page
  };

  return (
    <Router basename="/app">
      <div>
        <Routes>
          <Route path="/" element={<Home loggedInUser={loggedInUser} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/menu" element={<Menu loggedInUser={loggedInUser} onLogout={handleLogout} />} />
          <Route path="/profile" element={<Profile user={loggedInUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/preferredGender" element={<PreferredGender />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;