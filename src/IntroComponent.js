// IntroComponent.js
import React, { useState } from 'react';
import './IntroComponent.css';

const IntroComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation logic here
    // Update errors state accordingly
  };

  return (
    <div className="intro-container">
      {/* Left side with text */}
      <div className="intro-text">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable</p>
      </div>
      <div className="form-div">
        
      </div>
      {/* Right side with form */}
      <form className="intro-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Name'
          />
        </label>
        {/* Similar input for email */}
        <label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='Last Name'
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
        </label>
        {/* Add submit button */}
        {/* Display error messages if any */}
      </form>
    </div>
  );
};

export default IntroComponent;