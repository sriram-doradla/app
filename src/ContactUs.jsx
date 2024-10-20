// ContactUs.jsx
import React from 'react';
import './App.css'// Ensure App.css is imported for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <h2>Connect with us:</h2>
      <ul>
        <li>Email: support@datingapp.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Follow us on Social Media:</li>
        <li>
          <a href="https://twitter.com/datingapp" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li>
          <a href="https://facebook.com/datingapp" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/datingapp" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
