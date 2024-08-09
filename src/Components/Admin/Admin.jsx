
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Admin.css';

function Admin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate('/adminhome');
  };

 

  return (
    <div className='containerAd'>
      <div className="admin-auth">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
          <div className="remember-me">
            <input 
              type="checkbox" 
              name="rememberMe" 
              checked={formData.rememberMe} 
              onChange={handleCheckboxChange} 
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;

