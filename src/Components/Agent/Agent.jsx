
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Agent.css';
import { IoArrowBackCircle } from "react-icons/io5";

function Agent() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    agentName: '',
    username: '',
    contactNo: '',
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
    navigate('/agenthome'); 
  };

  return (
    <div className='containerA'>
      <div className="agent-auth">
        <h2>{isLogin ? 'Agent Login' : 'Agent Signup'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label>Company Name:</label>
              <input type="text" name="companyName" onChange={handleChange} required />
              <label>Agent Name:</label>
              <input type="text" name="agentName" onChange={handleChange} required />
              <label>Contact No:</label>
              <input type="tel" name="contactNo" onChange={handleChange} required />
            </>
          )}
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
          {isLogin && (
            <div className="remember-me">
              <input 
                type="checkbox" 
                name="rememberMe" 
                checked={formData.rememberMe} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </div>
      <IoArrowBackCircle style={{color:'white',fontSize:'50px'}}
          className="back-icon" 
          onClick={() => navigate(-1)} 
          title="Go Back"
        />
    </div>
  );
}

export default Agent;


