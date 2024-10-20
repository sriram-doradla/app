import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreferredGender = () => {
  const navigate = useNavigate();

  const handleGenderSelection = (gender) => {
    // Navigate to SwipeCards and pass the selected gender as state
    navigate('/swipeCards', { state: { selectedGender: gender } });
  };

  return (
    <div className="preferred-gender-page">
      <div className="container">
        <h2>Select Preferred Gender</h2>
        <button onClick={() => handleGenderSelection('male')}>Male</button>
        <button onClick={() => handleGenderSelection('female')}>Female</button>
      </div>
    </div>
  );
};

export default PreferredGender;
