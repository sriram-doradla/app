import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass navigate as an argument to the onLogin function
    onLogin(userId, password, navigate);
  };

  return (
    <div className="login-page">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
