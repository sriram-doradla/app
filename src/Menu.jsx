import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ onLogout }) => {
  const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get logged-in user from location state (passed from Login component)
    if (location.state?.user) {
      setLoggedInUser(location.state.user);
      setLoading(false);
    } else {
      // If user is not passed, fetch user data from backend (if session exists)
      const fetchUserData = async () => {
        try {
          const response = await axios.get('https://ram-o7av.onrender.com/api/menu', { withCredentials: true });
          if (response.data.success) {
            setLoggedInUser(response.data.user);
          } else {
            console.error('Failed to load user data:', response.data.message);
            navigate('/login'); // Redirect to login if data is not successfully loaded
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          navigate('/login'); // Redirect to login on error
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [navigate, location.state]);

  const handleLogoutClick = () => {
    onLogout(navigate); // Ensure onLogout clears the session and redirects
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu-page">
      <div className="container">
        {loggedInUser ? (
          <>
            <h2>Welcome, {loggedInUser.name}!</h2>
            <Link to="/profile">View Profile</Link>
            <br />
            <Link to="/preferredGender">
              <button>Discover</button>
            </Link>
            <Link to="/savedUsers">
              <button>Saved Users</button>
            </Link>
            <Link to="/chat">
              <button>Chat</button>
            </Link>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <h2>Welcome, Guest!</h2>
        )}
      </div>
    </div>
  );
};

export default Menu;
