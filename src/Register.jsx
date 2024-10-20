import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const interestsOptions = [
  { label: 'Traveling', value: 'traveling' },
  { label: 'Cooking', value: 'cooking' },
  { label: 'Sports', value: 'sports' },
  { label: 'Music', value: 'music' },
  { label: 'Art', value: 'art' },
  { label: 'Reading', value: 'reading' },
  // Add more interests as needed
];

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleInterestChange = (e) => {
    const value = e.target.value;
    setInterests((prevInterests) => 
      prevInterests.includes(value)
        ? prevInterests.filter((interest) => interest !== value)
        : [...prevInterests, value]
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, userId, password, interests, description, profileImage };
    onRegister(newUser);
    setName('');
    setUserId('');
    setPassword('');
    setDescription('');
    setInterests([]);
    setProfileImage(null);
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Tell us about yourself"
              required
            />
          </div>
          <div>
            <label>Interests:</label>
            <div className="interest-container">
              {interestsOptions.map((interest) => (
                <div key={interest.value}>
                  <input
                    type="checkbox"
                    value={interest.value}
                    checked={interests.includes(interest.value)}
                    onChange={handleInterestChange}
                  />
                  <label>{interest.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label>Profile Image:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {profileImage && <img src={profileImage} alt="Profile Preview" style={{ width: '100px', height: '100px' }} />}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
