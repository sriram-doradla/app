import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    password: '',
    description: '',
    interests: '',
    profileImage: '',
    gender: '', // Added gender field
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const interestsArray = formData.interests.split(',').map((item) => item.trim());

      const user = {
        ...formData,
        interests: interestsArray,
      };

      const response = await axios.post('https://ram-o7av.onrender.com/api/register', user);

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError('Error registering user: ' + (err.response?.data?.message || 'Please try again later'));
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label>User ID:</label>
            <input type="text" name="userId" value={formData.userId} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Interests (comma-separated):</label>
            <input type="text" name="interests" value={formData.interests} onChange={handleInputChange} />
          </div>
          <div>
            <label>Profile Image URL:</label>
            <input type="text" name="profileImage" value={formData.profileImage} onChange={handleInputChange} />
          </div>
          <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Register</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
