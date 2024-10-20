// About.jsx
import React from 'react';
import './About.css'; // Ensure App.css is imported for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Dating App</h1>
      <p>
        Welcome to our dating app, designed to help you find meaningful connections in a fun and easy way. 
        Our goal is to create a platform where singles can meet, chat, and develop relationships based on shared interests and values.
      </p>
      <h2>Interesting Facts:</h2>
      <ul>
        <li>Over 40% of people meet their partners online.</li>
        <li>Dating apps are used by people of all ages.</li>
        <li>Many relationships that start online can lead to long-term commitments.</li>
      </ul>
    </div>
  );
};

export default About;
