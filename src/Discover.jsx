import React from 'react';

const Discover = () => {
  return (
    <div className="discover-page">
      <div className="container">
        <h2>Discover New Profiles</h2>
        {/* Add your profile discovery logic here */}
        <p>Swipe right on profiles you like!</p>
        {/* For example, you might render profiles from an array */}
        {/* Example of profiles */}
        <div className="profile-list">
          <div className="profile-card">
            <h3>John Doe</h3>
            <p>Traveling, Music, Sports</p>
            <button>Swipe Right</button>
          </div>
          <div className="profile-card">
            <h3>Jane Smith</h3>
            <p>Art, Cooking, Reading</p>
            <button>Swipe Right</button>
          </div>
          {/* Add more profiles as needed */}
        </div>
      </div>
    </div>
  );
};

export default Discover;
